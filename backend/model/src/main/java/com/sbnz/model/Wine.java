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
import jakarta.persistence.ManyToMany;

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
	
	@ManyToMany
	@JoinTable(name = "wine_meat",
			   joinColumns = @JoinColumn(name = "wine_id"),
			   inverseJoinColumns = @JoinColumn(name ="meat_id"))
	private Set<Meat> meatList = new HashSet<>();
	
	@ManyToMany
	@JoinTable(name = "wine_sauce",
			   joinColumns = @JoinColumn(name = "wine_id"),
			   inverseJoinColumns = @JoinColumn(name = "sauce_id"))
	private Set<Sauce> sauceList = new HashSet<>();
	
	@ManyToMany
	@JoinTable(name = "wine_spice",
			   joinColumns = @JoinColumn(name = "wine_id"),
			   inverseJoinColumns = @JoinColumn(name = "spice_id"))
	private Set<Spice> spiceList = new HashSet<>();
	
	public Wine() {}
	
	public boolean containsMeatWithName(String name) {
        for (Meat meat : meatList) {
            if (meat.getName().equals(name)) {
                return true;
            }
        }
        return false;
    }
	
	public boolean containsSauceWithName(String name) {
        for (Sauce sauce : sauceList) {
            if (sauce.getName().equals(name)) {
                return true;
            }
        }
        return false;
    }
	
	public boolean containsSpiceWithName(Set<String> spices) {
		int sum = 0;
        for (Spice spice : spiceList) {
        	for(String s: spices) {
        		if (spice.getName().equals(s)) {
                    sum += 1;
                    break;
                }
        	}
        	
        }
        System.out.println("Sum je: " + sum);
        System.out.println("Duzina liste je: "+ spices.size());
        if(sum == spices.size()) {
        	return true;
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

	public Set<Spice> getSpiceList() {
		return spiceList;
	}

	public void setSpiceList(Set<Spice> spiceList) {
		this.spiceList = spiceList;
	}
	
	
	

}
