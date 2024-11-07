﻿using EasyStay.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace EasyStay.Persistence.EntityTypeConfigurations;

internal class HotelReviewEntityTypeConfiguration : IEntityTypeConfiguration<HotelReview> {
	public void Configure(EntityTypeBuilder<HotelReview> builder) {
		builder.ToTable("HotelReviews");

		builder.Property(hr => hr.Description)
			.HasMaxLength(4000)
			.IsRequired();

		builder.Property(hr => hr.Score)
			.IsRequired(false);

		builder.Property(hr => hr.UpdatedAtUtc)
			.IsRequired(false);

		builder.HasIndex(hr => hr.BookingId)
			.IsUnique();
	}
}