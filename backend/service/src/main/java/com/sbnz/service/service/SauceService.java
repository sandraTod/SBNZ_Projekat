package com.sbnz.service.service;

import java.util.Collection;
import com.sbnz.model.Sauce;

public interface SauceService {
	
	Collection<Sauce> getALL();
	
	Collection<Sauce> getSauces();
	
	void updateIsConnected(Long id);
	
	void deleteConnection(Long id);

}
