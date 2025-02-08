package com.sbnz.model;

import java.util.HashSet;
import java.util.Set;

public class Found {
	
	private String foundMeat;
	private String foundSauce;
	private Set<String> foundSpices = new HashSet<String>();
	private WineSugar foundSugar;
	
	
	public Found() {}
	
	
	
	public String getFoundMeat() {
		return foundMeat;
	}
	public void setFoundMeat(String foundMeat) {
		this.foundMeat = foundMeat;
	}
	public String getFoundSauce() {
		return foundSauce;
	}
	public void setFoundSauce(String foundSauce) {
		this.foundSauce = foundSauce;
	}
	public Set<String> getFoundSpices() {
		return foundSpices;
	}
	public void setFoundSpices(Set<String> foundSpices) {
		this.foundSpices = foundSpices;
	}
	public WineSugar getFoundSugar() {
		return foundSugar;
	}
	public void setFoundSugar(WineSugar foundSugar) {
		this.foundSugar = foundSugar;
	}
	
	
	
	
	
	

	
}


