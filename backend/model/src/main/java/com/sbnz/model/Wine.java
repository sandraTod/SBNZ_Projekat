package com.sbnz.model;

import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.OneToMany;

@Entity
public class Wine {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(nullable = false)
	private String name;
	
	@Column(nullable = false)
	private int year;
	
	@Enumerated(EnumType.STRING)
	private WineColor wineColor;
	
	@Enumerated(EnumType.STRING)
	private WineSugar wineSugar;
	
	@OneToMany
	@JoinColumn(name = "wine_id")
	private Set<Meat> meatList = new HashSet<>();
	
	@OneToMany
	@JoinColumn(name = "wine_id")
	private Set<Sauce> sauceList = new HashSet<>();
	
	
	@OneToMany
	@JoinColumn(name = "wine_id")
	private Set<Ingredient> ingredientList = new HashSet<>();
	
	public Wine() {}

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

	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}

	public WineColor getWineColor() {
		return wineColor;
	}

	public void setWineColor(WineColor wineColor) {
		this.wineColor = wineColor;
	}

	public WineSugar getWineSugar() {
		return wineSugar;
	}

	public void setWineSugar(WineSugar wineSugar) {
		this.wineSugar = wineSugar;
	}

	public Set<Meat> getMeatList() {
		return meatList;
	}

	public void setMeatList(Set<Meat> meatList) {
		this.meatList = meatList;
	}

	public Set<Sauce> getSauceList() {
		return sauceList;
	}

	public void setSauceList(Set<Sauce> sauceList) {
		this.sauceList = sauceList;
	}

	public Set<Ingredient> getIngredientList() {
		return ingredientList;
	}

	public void setIngredientList(Set<Ingredient> ingredientList) {
		this.ingredientList = ingredientList;
	}
	
	
	

}
