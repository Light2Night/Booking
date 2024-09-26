﻿using AutoMapper;
using EasyStay.Application.Interfaces;
using EasyStay.Application.MediatR.HotelAmenities.Queries.GetPage;
using EasyStay.Application.MediatR.HotelAmenities.Queries.Shared;
using EasyStay.Domain;

namespace EasyStay.WebApi.Services.PaginationServices;

public class HotelAmenityPaginationService(
	IBookingDbContext context,
	IMapper mapper
) : BasePaginationService<HotelAmenity, HotelAmenityVm, GetHotelAmenitiesPageQuery>(mapper) {

	protected override IQueryable<HotelAmenity> GetQuery() => context.HotelAmenities.OrderBy(ha => ha.Id);

	protected override IQueryable<HotelAmenity> FilterQuery(IQueryable<HotelAmenity> query, GetHotelAmenitiesPageQuery filter) {
		if (filter.Name is not null)
			query = query.Where(ha => ha.Name.ToLower().Contains(filter.Name.ToLower()));

		return query;
	}
}