﻿namespace Booking.Persistence;

public static class DbInitializer {
	public static void Inicialize(BookingDbContext context) {
		context.Database.EnsureCreated();
	}
}
