﻿using AutoMapper;
using AutoMapper.QueryableExtensions;
using Booking.Services.Interfaces;
using Booking.ViewModels.City;
using Booking.ViewModels.Hotel;
using FluentValidation;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Model.Context;

namespace Booking.Controllers {
	[Route("api/[controller]/[action]")]
	[ApiController]
	public class HotelsController(
		DataContext context,
		IMapper mapper,
		IValidator<CreateHotelVm> createValidator,
		IValidator<UpdateHotelVm> updateValidator,
		IHotelControllerService service,
		IPaginationService<HotelVm, HotelFilterVm> pagination
		) : ControllerBase {

		[HttpGet]
		public async Task<IActionResult> GetAll() {
			var hotels = await context.Hotels
				.Include(h => h.Photos.OrderBy(p => p.Priority))
				.ProjectTo<HotelVm>(mapper.ConfigurationProvider)
				.ToArrayAsync();

			return Ok(hotels);
		}

		[HttpGet]
		public async Task<IActionResult> GetPage([FromQuery] HotelFilterVm vm) {
			try {
				return Ok(await pagination.GetPageAsync(vm));
			}
			catch (Exception ex) {
				return BadRequest(ex.Message);
			}
		}

		[HttpGet("{id}")]
		public async Task<IActionResult> GetById(long id) {
			var countries = await context.Hotels
				.ProjectTo<HotelVm>(mapper.ConfigurationProvider)
				.FirstOrDefaultAsync(c => c.Id == id);

			if (countries is null)
				return NotFound();

			return Ok(countries);
		}

		[HttpPost]
		public async Task<IActionResult> Create([FromForm] CreateHotelVm vm) {
			var validationResult = await createValidator.ValidateAsync(vm);

			if (!validationResult.IsValid)
				return BadRequest(validationResult.Errors);

			await service.CreateAsync(vm);

			return Ok();
		}

		[HttpPut]
		public async Task<IActionResult> Update([FromForm] UpdateHotelVm vm) {
			var validationResult = await updateValidator.ValidateAsync(vm);

			if (!validationResult.IsValid)
				return BadRequest(validationResult.Errors);

			await service.UpdateAsync(vm);

			return Ok();
		}

		[HttpDelete]
		public async Task<IActionResult> Delete(long id) {
			await service.DeleteIfExistsAsync(id);
			return Ok();
		}
	}
}
