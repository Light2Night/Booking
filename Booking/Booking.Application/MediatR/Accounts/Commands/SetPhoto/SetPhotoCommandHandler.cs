﻿using Booking.Application.Common.Exceptions;
using Booking.Application.Interfaces;
using Booking.Application.MediatR.Accounts.Commands.Shared;
using Booking.Domain.Identity;
using MediatR;
using Microsoft.AspNetCore.Identity;

namespace Booking.Application.MediatR.Accounts.Commands.SetPhoto;

public class SetPhotoCommandHandler(
	UserManager<User> userManager,
	IJwtTokenService jwtTokenService,
	IImageService imageService,
	ICurrentUserService currentUserService
) : IRequestHandler<SetPhotoCommand, JwtTokenVm> {

	public async Task<JwtTokenVm> Handle(SetPhotoCommand request, CancellationToken cancellationToken) {
		var user = await userManager.FindByIdAsync(currentUserService.GetRequiredUserId().ToString())
			?? throw new Exception("User not found.");

		var oldPhoto = user.Photo;
		user.Photo = await imageService.SaveImageAsync(request.Photo);

		var identityResult = await userManager.UpdateAsync(user);
		if (identityResult.Succeeded) {
			imageService.DeleteImageIfExists(oldPhoto);
		}
		else {
			imageService.DeleteImageIfExists(user.Photo);
			throw new IdentityException(identityResult);
		}

		return new JwtTokenVm {
			Token = await jwtTokenService.CreateTokenAsync(user),
		};
	}
}
