﻿using EasyStay.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace EasyStay.Persistence.EntityTypeConfigurations;

internal class AddressEntityTypeConfiguration : IEntityTypeConfiguration<Address> {
	public void Configure(EntityTypeBuilder<Address> builder) {
		builder.ToTable("Addresses");

		builder.Property(a => a.Street)
			.HasMaxLength(255)
			.IsRequired();

		builder.Property(a => a.HouseNumber)
			.HasMaxLength(20)
			.IsRequired();
	}
}
