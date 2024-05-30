package com.sbnz.service.service;

import java.util.Collection;

import com.sbnz.model.Spice;

public interface SpiceService {
	
	
	Collection<Spice> getALL();
	
	Collection<Spice> getSpices();
	
	void updateIsConnected(Long id);


}
