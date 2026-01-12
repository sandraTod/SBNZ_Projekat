package com.sbnz.service.dto;

import com.sbnz.model.WineColor;
import com.sbnz.model.WineSugar;

public class FilterDTO {
	
	
	private int year;
	private WineColor wineColor;
	private WineSugar wineSugar;
	
	FilterDTO(){}

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
	
	

}
