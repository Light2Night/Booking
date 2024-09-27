﻿using EasyStay.Application.Interfaces;
using EasyStay.Domain;
using MediatR;

namespace EasyStay.Application.MediatR.Breakfasts.Commands.Create;

public class CreateBreakfastCommandHandler(
	IBookingDbContext context
) : IRequestHandler<CreateBreakfastCommand, long> {

	public async Task<long> Handle(CreateBreakfastCommand request, CancellationToken cancellationToken) {
		var entity = new Breakfast {
			Name = request.Name,
		};

		await context.Breakfasts.AddAsync(entity, cancellationToken);
		await context.SaveChangesAsync(cancellationToken);

		return entity.Id;
	}
}
