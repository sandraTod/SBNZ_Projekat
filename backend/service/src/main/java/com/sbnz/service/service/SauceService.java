package com.sbnz.service.service;

import java.util.Collection;
import com.sbnz.model.Sauce;

public interface SauceService {
	
	Collection<Sauce> getALL();
	
	void deleteSauce(Long id);
	
	void addSauce(Sauce sauce);
	
	Sauce updateSauce(Sauce toUpdate);

}
