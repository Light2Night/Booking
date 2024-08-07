﻿using Booking.Application.Interfaces;
using Booking.Domain.Constants;
using Booking.Domain.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace Booking.Persistence;

public static class DbInitializer {
	public static void Inicialize(BookingDbContext context) {
		context.Database.Migrate();
	}

	public static void SeedIdentity(IBookingDbContext context, UserManager<User> userManager, RoleManager<Role> roleManager, IConfiguration configuration, IImageService imageService) {
		var cancellationTokenSource = new CancellationTokenSource();
		var token = cancellationTokenSource.Token;
		using var transaction = context.BeginTransactionAsync(token).Result;

		try {
			if (!roleManager.Roles.Any()) {
				CreateRolesAsync(roleManager).Wait();
			}

			if (!userManager.Users.Any()) {
				CreateAdminAsync(userManager, configuration, imageService).Wait();
			}

			transaction.Commit();
		}
		catch (Exception) {
			transaction.Rollback();
			throw;
		}
	}

	private static async Task CreateRolesAsync(RoleManager<Role> roleManager) {
		foreach (var roleName in Roles.All) {
			await roleManager.CreateAsync(new Role {
				Name = roleName
			});
		}
	}

	private static async Task CreateAdminAsync(UserManager<User> userManager, IConfiguration configuration, IImageService imageService) {
		const string base64Image = "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";

		var admin = new Admin {
			FirstName = "Олег",
			LastName = "Ольжич",
			Email = configuration["Admin:Email"]
				?? throw new NullReferenceException("Admin:Email"),
			UserName = "admin",
			Photo = await imageService.SaveImageAsync(base64Image)
		};

		IdentityResult result = await userManager.CreateAsync(
			admin,
			configuration["Admin:Password"]
				?? throw new NullReferenceException("Admin:Password")
		);

		if (!result.Succeeded)
			throw new Exception("Error creating admin account");

		result = await userManager.AddToRoleAsync(admin, Roles.Admin);

		if (!result.Succeeded)
			throw new Exception("Role assignment error");
	}
}
