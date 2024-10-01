﻿using AutoMapper;
using EasyStay.Application.Common.Mappings;
using EasyStay.Domain;

namespace EasyStay.Application.MediatR.Accounts.Queries.GetRealtorsInformation;

public class RealtorsInformationCitizenshipVm : IMapWith<Citizenship> {
	public long Id { get; set; }

	public string Name { get; set; } = null!;



	public void Mapping(Profile profile) {
		profile.CreateMap<Citizenship, RealtorsInformationCitizenshipVm>();
	}
}