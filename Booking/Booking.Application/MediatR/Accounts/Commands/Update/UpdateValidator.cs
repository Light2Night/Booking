﻿using Booking.Application.Interfaces;
using FluentValidation;

namespace Booking.Application.MediatR.Accounts.Commands.Update;

public class UpdateValidator : AbstractValidator<UpdateCommand> {
	public UpdateValidator(IIdentityValidator identityValidator, IImageValidator imageValidator) {
		RuleFor(u => u.Email)
			.NotEmpty()
				.WithMessage("Email is empty or null")
			.MaximumLength(100)
				.WithMessage("Email is too long")
			.EmailAddress()
				.WithMessage("Email is invalid")
			.MustAsync(identityValidator.IsNewOrCurrentEmailAsync)
				.WithMessage("There is already a user with this email");

		RuleFor(u => u.FirstName)
			.NotEmpty()
				.WithMessage("FirstName is empty or null")
			.MaximumLength(100)
				.WithMessage("FirstName is too long");

		RuleFor(u => u.LastName)
			.NotEmpty()
				.WithMessage("LastName is empty or null")
			.MaximumLength(100)
				.WithMessage("LastName is too long");

		RuleFor(u => u.Photo)
			.NotNull()
				.WithMessage("Image is not selected")
			.MustAsync(imageValidator.IsValidImageAsync)
				.WithMessage("Image is not valid");
	}
}
