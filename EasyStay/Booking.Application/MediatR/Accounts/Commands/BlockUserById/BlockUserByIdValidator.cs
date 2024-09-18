﻿using Booking.Application.Interfaces;
using FluentValidation;

namespace Booking.Application.MediatR.Accounts.Commands.BlockUserById;

public class BlockUserByIdValidator : AbstractValidator<BlockUserByIdCommand> {
	public BlockUserByIdValidator(ICurrentUserService currentUserService) {
		RuleFor(b => b.Id)
			.NotEqual(currentUserService.GetRequiredUserId())
				.WithMessage("You cannot block yourself.");

		RuleFor(b => b.LockoutEndUtc)
			.GreaterThan(DateTime.UtcNow)
				.WithMessage("The lockout end time must be set to a future date and time.");
	}
}
