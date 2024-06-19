package com.sbnz.service.service;

import java.util.Collection;

import com.sbnz.model.Meat;

public interface MeatService {
	
	Collection<Meat> getALL();
	
	void addMeat(Meat meat);
	
	void deleteMeat(Long id);
	

}
