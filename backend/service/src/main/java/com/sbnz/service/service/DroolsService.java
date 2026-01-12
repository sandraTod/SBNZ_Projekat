package com.sbnz.service.service;

import java.util.Collection;

import com.sbnz.model.Answers;
import com.sbnz.model.Recipe;
import com.sbnz.model.Wine;
import com.sbnz.service.dto.FilterDTO;

public interface DroolsService {
	
	Wine findWine(Answers answers);
	
	Collection<Wine> findWineList(Answers answers);
	
	Collection<Recipe> findRecipes(String wineName);
	
	Collection<Wine> wineFilter(FilterDTO criteria);
}
