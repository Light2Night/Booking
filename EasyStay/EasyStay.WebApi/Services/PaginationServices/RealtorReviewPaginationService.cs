﻿using AutoMapper;
using EasyStay.Application.Interfaces;
using EasyStay.Application.MediatR.RealtorReviews.Queries.GetPage;
using EasyStay.Application.MediatR.RealtorReviews.Queries.Shared;
using EasyStay.Domain;

namespace EasyStay.WebApi.Services.PaginationServices;

public class RealtorReviewPaginationService(
	IBookingDbContext context,
	IMapper mapper
) : BasePaginationService<RealtorReview, RealtorReviewVm, GetRealtorReviewsPageQuery>(mapper) {

	protected override IQueryable<RealtorReview> GetQuery() => context.RealtorReviews.OrderByDescending(r => r.CreatedAtUtc);

	protected override IQueryable<RealtorReview> FilterQuery(IQueryable<RealtorReview> query, GetRealtorReviewsPageQuery filter) {
		if (filter.Description is not null)
			query = query.Where(r => r.Description.ToLower().Contains(filter.Description.ToLower()));

		if (filter.Score is not null)
			query = query.Where(r => r.Score == filter.Score);
		if (filter.MinScore is not null)
			query = query.Where(r => r.Score >= filter.MinScore);
		if (filter.MaxScore is not null)
			query = query.Where(r => r.Score <= filter.MaxScore);

		if (filter.CreatedAtUtc is not null)
			query = query.Where(r => r.CreatedAtUtc == filter.CreatedAtUtc);
		if (filter.MinCreatedAtUtc is not null)
			query = query.Where(r => r.CreatedAtUtc >= filter.MinCreatedAtUtc);
		if (filter.MaxCreatedAtUtc is not null)
			query = query.Where(r => r.CreatedAtUtc <= filter.MaxCreatedAtUtc);

		if (filter.UpdatedAtUtc is not null)
			query = query.Where(r => r.UpdatedAtUtc == filter.UpdatedAtUtc);
		if (filter.MinUpdatedAtUtc is not null)
			query = query.Where(r => r.UpdatedAtUtc >= filter.MinUpdatedAtUtc);
		if (filter.MaxUpdatedAtUtc is not null)
			query = query.Where(r => r.UpdatedAtUtc <= filter.MaxUpdatedAtUtc);

		if (filter.AuthorId is not null)
			query = query.Where(r => r.AuthorId == filter.AuthorId);

		if (filter.RealtorId is not null)
			query = query.Where(r => r.RealtorId == filter.RealtorId);

		return query;
	}
}