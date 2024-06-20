package com.sbnz.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Sauce {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(nullable = false)
	private String name;
	
	@Enumerated(EnumType.STRING)
	private NationalCuisine nationalCuisine;

	
	public Sauce() {}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public NationalCuisine getNationalCuisine() {
		return nationalCuisine;
	}

	public void setNationalCuisine(NationalCuisine nationalCuisine) {
		this.nationalCuisine = nationalCuisine;
	}
	
	
	
	
	
	
}
