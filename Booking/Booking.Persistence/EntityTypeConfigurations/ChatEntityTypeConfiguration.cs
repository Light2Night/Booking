﻿using Booking.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Booking.Persistence.EntityTypeConfigurations;

internal class ChatEntityTypeConfiguration : IEntityTypeConfiguration<Chat> {
	public void Configure(EntityTypeBuilder<Chat> builder) {
		builder.ToTable("Chats");

		builder.HasAlternateKey(c => new {
			c.CustomerId,
			c.RealtorId
		});
	}
}
