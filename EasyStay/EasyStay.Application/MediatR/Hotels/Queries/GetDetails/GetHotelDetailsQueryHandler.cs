﻿using AutoMapper;
using AutoMapper.QueryableExtensions;
using EasyStay.Application.Common.Exceptions;
using EasyStay.Application.Interfaces;
using EasyStay.Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace EasyStay.Application.MediatR.Hotels.Queries.GetDetails;

public class GetHotelDetailsQueryHandler(
	IBookingDbContext context,
	IMapper mapper
) : IRequestHandler<GetHotelDetailsQuery, HotelDetailsVm> {

	public async Task<HotelDetailsVm> Handle(GetHotelDetailsQuery request, CancellationToken cancellationToken) {
		var vm = await context.Hotels
			.ProjectTo<HotelDetailsVm>(mapper.ConfigurationProvider)
			.FirstOrDefaultAsync(h => h.Id == request.Id, cancellationToken)
			?? throw new NotFoundException(nameof(Hotel), request.Id);

		return vm;
	}
}