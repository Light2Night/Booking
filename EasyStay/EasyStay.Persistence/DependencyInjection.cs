﻿using EasyStay.Application.Interfaces;
using EasyStay.Domain.Identity;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace EasyStay.Persistence;

public static class DependencyInjection {
	public static IServiceCollection AddPersistence(this IServiceCollection services, IConfiguration configuration) {
		var connectionString = configuration.GetConnectionString("Npgsql");

		services.AddDbContext<BookingDbContext>(options => {
			options.UseNpgsql(connectionString);
		});

		services.AddScoped<IBookingDbContext, BookingDbContext>();

		services
			.AddIdentity<User, Role>(options => {
				options.Stores.MaxLengthForKeys = 128;

				options.Password.RequiredLength = 8;
				options.Password.RequireDigit = false;
				options.Password.RequireNonAlphanumeric = false;
				options.Password.RequireUppercase = false;
				options.Password.RequireLowercase = false;
			})
			.AddEntityFrameworkStores<BookingDbContext>()
			.AddDefaultTokenProviders();

		var singinKey = new SymmetricSecurityKey(
			Encoding.UTF8.GetBytes(
				configuration["Authentication:Jwt:SecretKey"]
					?? throw new NullReferenceException("Authentication:Jwt:SecretKey")
			)
		);

		services
			.AddAuthentication(options => {
				options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
				options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
				options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
			})
			.AddJwtBearer(options => {
				options.SaveToken = true;
				options.RequireHttpsMetadata = false;
				options.TokenValidationParameters = new TokenValidationParameters() {
					ValidateIssuer = false,
					ValidateAudience = false,
					IssuerSigningKey = singinKey,
					ValidateLifetime = true,
					ValidateIssuerSigningKey = true,
					ClockSkew = TimeSpan.Zero
				};

				options.Events = new JwtBearerEvents {
					OnTokenValidated = async context => {
						if (context.Principal is null)
							return;

						var userManager = context.HttpContext
							.RequestServices
							.GetRequiredService<UserManager<User>>();
						var user = await userManager.GetUserAsync(context.Principal);

						if (user is null || user.LockoutEnd > DateTimeOffset.UtcNow) {
							context.Fail("This account is locked.");
						}
					}
				};
			});

		return services;
	}
}