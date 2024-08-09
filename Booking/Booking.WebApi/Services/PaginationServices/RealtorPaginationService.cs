﻿using AutoMapper;
using Booking.Application.MediatR.Accounts.Queries.GetRealtorPage;
using Booking.Domain.Identity;
using Microsoft.AspNetCore.Identity;

namespace Booking.WebApi.Services.PaginationServices;

public class RealtorPaginationService(
	UserManager<User> customerManager,
	IMapper mapper
) : BasePaginationService<Realtor, RealtorItemVm, GetRealtorPageCommand>(mapper) {

	protected override IQueryable<Realtor> GetQuery() =>
		customerManager.Users
			.OfType<Realtor>()
			.OrderBy(r => r.Id);

	protected override IQueryable<Realtor> FilterQuery(IQueryable<Realtor> query, GetRealtorPageCommand filter) {
		if (filter.FirstName is not null)
			query = query.Where(r => r.FirstName.ToLower().Contains(filter.FirstName.ToLower()));

		if (filter.LastName is not null)
			query = query.Where(r => r.LastName.ToLower().Contains(filter.LastName.ToLower()));

		return query;
	}
}