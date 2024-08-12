﻿using Booking.Application.Common.Exceptions;
using Booking.Application.Interfaces;
using Booking.Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Booking.Application.MediatR.RealtorReviews.Commands.Update;

public class UpdateRealtorReviewCommandHandler(
	IBookingDbContext context,
	ICurrentUserService currentUserService
) : IRequestHandler<UpdateRealtorReviewCommand> {

	public async Task Handle(UpdateRealtorReviewCommand request, CancellationToken cancellationToken) {
		var entity = await context.RealtorReviews
			.FirstOrDefaultAsync(
				r => r.Id == request.Id && r.AuthorId == currentUserService.GetRequiredUserId(),
				cancellationToken
			)
			?? throw new NotFoundException(nameof(RealtorReview), request.Id);

		entity.Description = request.Description;
		entity.Score = request.Score;
		entity.UpdatedAtUtc = DateTime.UtcNow;

		await context.SaveChangesAsync(cancellationToken);
	}
}