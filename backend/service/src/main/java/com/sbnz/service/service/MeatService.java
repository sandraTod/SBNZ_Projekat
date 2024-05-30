package com.sbnz.service.service;

import java.util.Collection;

import com.sbnz.model.Meat;

public interface MeatService {
	
	Collection<Meat> getALL();
	
	Collection<Meat> getMeats();
	
	void updateIsConnected(Long id);

}
