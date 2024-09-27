﻿using EasyStay.Domain;
using EasyStay.Domain.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;

namespace EasyStay.Application.Interfaces;

public interface IEasyStayDbContext {
	Task<int> SaveChangesAsync(CancellationToken cancellationToken);
	int SaveChanges();

	Task<IDbContextTransaction> BeginTransactionAsync(CancellationToken cancellationToken);

	DbSet<User> Users { get; set; }
	DbSet<Customer> Customers { get; set; }
	DbSet<Realtor> Realtors { get; set; }
	DbSet<Admin> Admins { get; set; }
	DbSet<Role> Roles { get; set; }

	DbSet<Country> Countries { get; set; }
	DbSet<City> Cities { get; set; }
	DbSet<Address> Addresses { get; set; }
	DbSet<RentalPeriod> RentalPeriods { get; set; }
	DbSet<Hotel> Hotels { get; set; }
	DbSet<HotelCategory> HotelCategories { get; set; }
	DbSet<HotelRentalPeriod> HotelRentalPeriods { get; set; }
	DbSet<HotelAmenity> HotelAmenities { get; set; }
	DbSet<HotelHotelAmenity> HotelHotelAmenities { get; set; }
	DbSet<Breakfast> Breakfasts { get; set; }
	DbSet<HotelBreakfast> HotelBreakfasts { get; set; }
	DbSet<HotelPhoto> HotelPhotos { get; set; }
	DbSet<RealtorReview> RealtorReviews { get; set; }
	DbSet<Chat> Chats { get; set; }
	DbSet<Message> Messages { get; set; }
}