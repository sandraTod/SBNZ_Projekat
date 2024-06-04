package com.sbnz.service.service;

import java.util.Collection;

import com.sbnz.model.Meat;

public interface MeatService {
	
	Collection<Meat> getALL();
	
	Collection<Meat> getMeats();
	
	void deleteMeat(Long id);
	
	void updateIsConnected(Long id);
	
	void deleteConnection(Long id);

}
