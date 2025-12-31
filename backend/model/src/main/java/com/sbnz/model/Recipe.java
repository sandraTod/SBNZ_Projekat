package com.sbnz.model;

import java.util.List;
import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Transient;

@Entity
public class Recipe {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(nullable = false)
	private String name;
	
	@ManyToOne()
	@JoinColumn(name = "meat_id", nullable = true)
	private Meat meat;
	
	@ManyToOne()
	@JoinColumn(name = "sauce_id", nullable = true)
	private Sauce sauce;
	
	@ManyToMany()
	@JoinTable(name = "recipe_spice",
	   joinColumns = @JoinColumn(name = "recipe_id"),
	   inverseJoinColumns = @JoinColumn(name = "spice_id"))
	private Set<Spice> spices;
	
	@Column(nullable = false)
	private String description;
	
	@Transient
	private int score;
	
	
	
	public Recipe() {}
	
	
	public void addScore(int value) {
		this.score += value;
	}
	
	public boolean containsSpice(Set<Spice> spicesList) {
		if(this.spices == null || this.spices.isEmpty()) {
			System.out.println("Usla sam u prvi if");
			return false;
		}
		if(spicesList == null || spicesList.isEmpty()) {
			System.out.println("Usla sam u drugi if");
			return false;
		}
		for(Spice s : spicesList) {
			if(this.spices.contains(s)) {
				System.out.println(s);
				return true;
				
			}
		}
		return false;
	}
	
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

	public Meat getMeat() {
		return meat;
	}

	public void setMeat(Meat meat) {
		this.meat = meat;
	}

	public Sauce getSauce() {
		return sauce;
	}

	public void setSauce(Sauce sauce) {
		this.sauce = sauce;
	}

	public Set<Spice> getSpices() {
		return spices;
	}

	public void setSpices(Set<Spice> spices) {
		this.spices = spices;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getScore() {
		return score;
	}

	public void setScore(int score) {
		this.score = score;
	}



	
	
	
	
	
	
	
	
	

}
