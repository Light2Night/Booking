﻿using Booking.Application.Common.Exceptions;
using Booking.Application.Interfaces;
using Booking.Domain;
using MediatR;

namespace Booking.Application.MediatR.Cities.Commands.Update;

public class UpdateCityCommandHandler(
	IBookingDbContext context,
	IImageService imageService
) : IRequestHandler<UpdateCityCommand> {

	public async Task Handle(UpdateCityCommand request, CancellationToken cancellationToken) {
		var entity = await context.Cities.FindAsync([request.Id], cancellationToken)
			?? throw new NotFoundException(nameof(City), request.Id);

		string oldImage = entity.Image;

		entity.Name = request.Name;
		entity.Image = await imageService.SaveImageAsync(request.Image);
		entity.Longitude = request.Longitude;
		entity.Latitude = request.Latitude;
		entity.CountryId = request.CountryId;

		try {
			await context.SaveChangesAsync(cancellationToken);

			imageService.DeleteImageIfExists(oldImage);
		}
		catch {
			imageService.DeleteImageIfExists(entity.Image);
			throw;
		}
	}
}
