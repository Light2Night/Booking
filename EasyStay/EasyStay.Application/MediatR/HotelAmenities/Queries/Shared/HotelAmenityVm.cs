﻿using AutoMapper;
using EasyStay.Application.Common.Mappings;
using EasyStay.Domain;

namespace EasyStay.Application.MediatR.HotelAmenities.Queries.Shared;

public class HotelAmenityVm : IMapWith<HotelAmenity> {
	public long Id { get; set; }

	public string Name { get; set; } = null!;



	public void Mapping(Profile profile) {
		profile.CreateMap<HotelAmenity, HotelAmenityVm>();
	}
}