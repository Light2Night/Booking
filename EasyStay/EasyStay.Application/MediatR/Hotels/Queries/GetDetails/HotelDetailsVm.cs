﻿using AutoMapper;
using EasyStay.Application.Common.Mappings;
using EasyStay.Application.MediatR.Addresses.Queries.Shared;
using EasyStay.Application.MediatR.HotelCategories.Queries.Shared;
using EasyStay.Application.MediatR.Hotels.Queries.Shared;
using EasyStay.Application.MediatR.RentalPeriods.Queries.Shared;
using EasyStay.Domain;

namespace EasyStay.Application.MediatR.Hotels.Queries.GetDetails;

public class HotelDetailsVm : IMapWith<Hotel> {
	public long Id { get; set; }

	public string Name { get; set; } = null!;

	public string Description { get; set; } = null!;

	public double Area { get; set; }

	public int NumberOfRooms { get; set; }

	public bool IsArchived { get; set; }

	public AddressVm Address { get; set; } = null!;

	public HotelCategoryVm Category { get; set; } = null!;

	public long RealtorId { get; set; }
	public RealtorVm Realtor { get; set; } = null!;

	public IEnumerable<RentalPeriodVm> RentalPeriods { get; set; } = null!;

	public IEnumerable<HotelPhotoVm> Photos { get; set; } = null!;



	public void Mapping(Profile profile) {
		profile.CreateMap<Hotel, HotelDetailsVm>()
			.ForMember(
				dest => dest.RentalPeriods,
				opt => opt.MapFrom(
					src => src.HotelRentalPeriods
						.Select(hrp => hrp.RentalPeriod)
						.ToArray()
				)
			);
	}
}
