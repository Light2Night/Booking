﻿using EasyStay.Domain.Identity;

namespace EasyStay.Domain;

public class Gender {
	public long Id { get; set; }

	public string Name { get; set; } = null!;

	public ICollection<Realtor> Realtors { get; set; } = null!;
}