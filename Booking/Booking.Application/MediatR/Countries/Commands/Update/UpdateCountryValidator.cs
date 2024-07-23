﻿using Booking.Application.Interfaces;
using FluentValidation;

namespace Booking.Application.MediatR.Countries.Commands.Update;

public class UpdateCountryValidator : AbstractValidator<UpdateCountryCommand> {
	public UpdateCountryValidator(IImageValidator imageValidator) {
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
	}
}
