﻿using AutoMapper;
using EasyStay.Application.Common.Mappings;
using EasyStay.Domain;

namespace EasyStay.Application.MediatR.Accounts.Queries.GetCustomersInformation;

public class CustomersInformationCountryVm : IMapWith<Country> {
	public long Id { get; set; }

	public string Name { get; set; } = null!;



	public void Mapping(Profile profile) {
		profile.CreateMap<Country, CustomersInformationCountryVm>();
	}
}
