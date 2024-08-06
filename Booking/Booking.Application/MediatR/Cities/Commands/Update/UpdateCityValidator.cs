﻿using Booking.Application.Interfaces;
using FluentValidation;

namespace Booking.Application.MediatR.Cities.Commands.Update;

public class UpdateCityValidator : AbstractValidator<UpdateCityCommand> {
	public UpdateCityValidator(IImageValidator imageValidator, IExistingEntityCheckerService existingEntityCheckerService) {
		RuleFor(c => c.Name)
			.NotEmpty()
				.WithMessage("Name is empty or null")
			.MaximumLength(255)
				.WithMessage("Name is too long");

		RuleFor(c => c.Image)
			.NotNull()
				.WithMessage("Image is not selected")
			.MustAsync(imageValidator.IsValidImageAsync)
				.WithMessage("Image is not valid");

		RuleFor(c => c.Longitude)
			.InclusiveBetween(-180, 180)
				.WithMessage("Longitude must be between -180 and 180 degrees");

		RuleFor(c => c.Latitude)
			.InclusiveBetween(-90, 90)
				.WithMessage("Latitude must be between -90 and 90 degrees");

		RuleFor(c => c.CountryId)
			.MustAsync(existingEntityCheckerService.IsCorrectCountryId)
				.WithMessage("Country with this id is not exists");
	}
}