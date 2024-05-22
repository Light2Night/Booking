﻿using Booking.ViewModels.Address;

namespace Booking.ViewModels.Hotel;

public class UpdateHotelVm {
	public long Id { get; set; }

	public string Name { get; set; } = null!;

	public string Description { get; set; } = null!;

	public double Rating { get; set; }

	public UpdateAddressVm Address { get; set; } = null!;

	public IEnumerable<IFormFile> Photos { get; set; } = null!;
}
