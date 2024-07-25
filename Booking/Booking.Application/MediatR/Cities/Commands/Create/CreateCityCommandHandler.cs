﻿using Booking.Application.Interfaces;
using Booking.Domain;
using MediatR;

namespace Booking.Application.MediatR.Cities.Commands.Create;

public class CreateCityCommandHandler(
	IBookingDbContext context,
	IImageService imageService
) : IRequestHandler<CreateCityCommand, long> {

	public async Task<long> Handle(CreateCityCommand request, CancellationToken cancellationToken) {
		var entity = new City {
			Name = request.Name,
			Image = await imageService.SaveImageAsync(request.Image),
			Longitude = request.Longitude,
			Latitude = request.Latitude,
			CountryId = request.CountryId
		};

		await context.Cities.AddAsync(entity, cancellationToken);

		try {
			await context.SaveChangesAsync(cancellationToken);
		}
		catch (Exception) {
			imageService.DeleteImageIfExists(entity.Image);
			throw;
		}

		return entity.Id;
	}
}
