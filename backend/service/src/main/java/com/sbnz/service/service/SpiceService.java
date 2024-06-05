package com.sbnz.service.service;

import java.util.Collection;

import com.sbnz.model.Spice;

public interface SpiceService {
	
	
	Collection<Spice> getALL();
	
	Collection<Spice> getSpices();
	
	void deleteSpice(Long id);
	 
	void addSpice(Spice spice);
	
	void updateIsConnected(Long id);
	
	void deleteConnection(Long id);


}
