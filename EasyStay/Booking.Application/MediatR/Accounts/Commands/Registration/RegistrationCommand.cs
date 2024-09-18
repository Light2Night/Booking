﻿using AutoMapper;
using Booking.Application.Common.Mappings;
using Booking.Application.MediatR.Accounts.Commands.Shared;
using Booking.Application.Models.Accounts;
using MediatR;
using Microsoft.AspNetCore.Http;

namespace Booking.Application.MediatR.Accounts.Commands.Registration;

public class RegistrationCommand : IRequest<JwtTokenVm>, IMapWith<UserDto> {
	public string FirstName { get; set; } = null!;
	public string LastName { get; set; } = null!;
	public IFormFile? Image { get; set; }

	public string Email { get; set; } = null!;
	public string UserName { get; set; } = null!;
	public string Password { get; set; } = null!;

	public string Type { get; set; } = null!;



	public void Mapping(Profile profile) {
		profile.CreateMap<RegistrationCommand, UserDto>();
	}
}
