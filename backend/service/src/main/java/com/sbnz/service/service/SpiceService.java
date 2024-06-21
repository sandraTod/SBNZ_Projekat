package com.sbnz.service.service;

import java.util.Collection;

import com.sbnz.model.Spice;

public interface SpiceService {
	
	
	Collection<Spice> getALL();
	
	void deleteSpice(Long id);
	 
	void addSpice(Spice spice);
	


}
