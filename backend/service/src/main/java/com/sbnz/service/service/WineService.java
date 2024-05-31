package com.sbnz.service.service;

import java.util.Collection;

import com.sbnz.model.Wine;

public interface WineService {
	
	Collection<Wine> getAll();
	
	void deleteWine(Long id);
	
	Wine updateWine(Wine wine);

}
