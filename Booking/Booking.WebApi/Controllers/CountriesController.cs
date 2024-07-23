using Booking.Application.MediatR.Countries.Commands.Create;
using Booking.Application.MediatR.Countries.Commands.Delete;
using Booking.Application.MediatR.Countries.Commands.Update;
using Booking.Application.MediatR.Countries.Queries.GetAll;
using Booking.Application.MediatR.Countries.Queries.GetDetails;
using Booking.Application.MediatR.Countries.Queries.GetPage;
using Booking.WebApi.Controllers;
using Microsoft.AspNetCore.Mvc;

namespace Booking.Controllers;

public class CountriesController : BaseApiController {
	[HttpGet]
	public async Task<IActionResult> GetAll() {

		//int i = 0;
		//i++;
		//i--;
		//int z = 2 / i;
		var items = await Mediator.Send(new GetAllCountriesQuery());

		return Ok(items);
	}

	[HttpGet]
	public async Task<IActionResult> GetPage([FromQuery] GetCountriesPageQuery filter) {
		var page = await Mediator.Send(filter);

		return Ok(page);
	}

	[HttpGet("{id}")]
	public async Task<IActionResult> GetById(long id) {
		var entity = await Mediator.Send(new GetCountryDetailsQuery() { Id = id });

		return Ok(entity);
	}

	[HttpPost]
	public async Task<IActionResult> Create([FromForm] CreateCountryCommand command) {
		var id = await Mediator.Send(command);

		return Ok(id);
	}

	[HttpPut]
	public async Task<IActionResult> Update([FromForm] UpdateCountryCommand command) {
		await Mediator.Send(command);

		return NoContent();
	}

	[HttpDelete("{id}")]
	public async Task<IActionResult> Delete(long id) {
		await Mediator.Send(new DeleteCountryCommand { Id = id });

		return NoContent();
	}
}
