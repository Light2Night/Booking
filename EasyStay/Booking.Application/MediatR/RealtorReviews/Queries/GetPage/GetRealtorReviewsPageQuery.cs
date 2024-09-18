﻿using Booking.Application.MediatR.RealtorReviews.Queries.Shared;
using Booking.Application.Models.Pagination;
using MediatR;

namespace Booking.Application.MediatR.RealtorReviews.Queries.GetPage;

public class GetRealtorReviewsPageQuery : PaginationFilterDto, IRequest<PageVm<RealtorReviewVm>> {
	public string? Description { get; set; }

	public double? Score { get; set; }
	public double? MinScore { get; set; }
	public double? MaxScore { get; set; }

	public DateTime? CreatedAtUtc { get; set; }
	public DateTime? MinCreatedAtUtc { get; set; }
	public DateTime? MaxCreatedAtUtc { get; set; }

	public DateTime? UpdatedAtUtc { get; set; }
	public DateTime? MinUpdatedAtUtc { get; set; }
	public DateTime? MaxUpdatedAtUtc { get; set; }

	public long? AuthorId { get; set; }

	public long? RealtorId { get; set; }
}