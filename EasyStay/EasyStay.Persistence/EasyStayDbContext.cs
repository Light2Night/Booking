﻿using EasyStay.Application.Interfaces;
using EasyStay.Domain;
using EasyStay.Domain.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;

namespace EasyStay.Persistence;

public class EasyStayDbContext(DbContextOptions<EasyStayDbContext> options)
	: IdentityDbContext<
		User,
		Role,
		long,
		IdentityUserClaim<long>,
		UserRole,
		IdentityUserLogin<long>,
		IdentityRoleClaim<long>,
		IdentityUserToken<long>
	>(options),
	IEasyStayDbContext {

	public DbSet<Customer> Customers { get; set; }
	public DbSet<Realtor> Realtors { get; set; }
	public DbSet<Admin> Admins { get; set; }

	public DbSet<Country> Countries { get; set; }
	public DbSet<City> Cities { get; set; }
	public DbSet<Address> Addresses { get; set; }
	public DbSet<RentalPeriod> RentalPeriods { get; set; }
	public DbSet<Hotel> Hotels { get; set; }
	public DbSet<HotelCategory> HotelCategories { get; set; }
	public DbSet<HotelRentalPeriod> HotelRentalPeriods { get; set; }
	public DbSet<HotelAmenity> HotelAmenities { get; set; }
	public DbSet<HotelHotelAmenity> HotelHotelAmenities { get; set; }
	public DbSet<Breakfast> Breakfasts { get; set; }
	public DbSet<HotelBreakfast> HotelBreakfasts { get; set; }
	public DbSet<HotelPhoto> HotelPhotos { get; set; }
	public DbSet<RealtorReview> RealtorReviews { get; set; }
	public DbSet<Chat> Chats { get; set; }
	public DbSet<Message> Messages { get; set; }

	protected override void OnModelCreating(ModelBuilder modelBuilder) {
		base.OnModelCreating(modelBuilder);

		modelBuilder.ApplyConfigurationsFromAssembly(typeof(EasyStayDbContext).Assembly);
	}

	public Task<IDbContextTransaction> BeginTransactionAsync(CancellationToken cancellationToken) {
		return Database.BeginTransactionAsync(cancellationToken);
	}
}