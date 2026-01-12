package com.sbnz.service.service.implementation;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;

import javax.management.RuntimeErrorException;

import org.kie.api.KieServices;
import org.kie.api.runtime.KieContainer;
import org.kie.api.runtime.KieSession;
import org.kie.api.runtime.rule.QueryResults;
import org.kie.api.runtime.rule.QueryResultsRow;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sbnz.model.Answers;
import com.sbnz.model.Meat;
import com.sbnz.model.Recipe;
import com.sbnz.model.Sauce;
import com.sbnz.model.Spice;
import com.sbnz.model.Wine;
import com.sbnz.service.dto.FilterDTO;
import com.sbnz.service.repository.MeatRepository;
import com.sbnz.service.repository.RecipeRepository;
import com.sbnz.service.repository.SauceRepository;
import com.sbnz.service.repository.SpiceRepository;
import com.sbnz.service.repository.WineRepository;
import com.sbnz.service.service.DroolsService;

@Service
public class DroolsServiceImpl implements DroolsService{
	
	@Autowired
	WineRepository wineRepository;
	
	@Autowired
	MeatRepository meatRepository;
	
	@Autowired
	SauceRepository sauceRepository;
	
	@Autowired
	SpiceRepository spiceRepository;
	
	@Autowired
	RecipeRepository recipeRepository;
	
	
	@Override
	public Wine findWine(Answers answers) {
		
		KieServices ks = KieServices.Factory.get();
		KieContainer kieContainer = ks.getKieClasspathContainer();
    	KieSession kieSession = kieContainer.newKieSession("ksession-rules");
    	
		Wine foundWine = new Wine();
		
		
    	
		Collection<Wine> wineList = wineRepository.findAll();
		Collection<Meat> meatList = meatRepository.findAll();
		Collection<Sauce> sauceList = sauceRepository.findAll();
		Collection<Spice> spiceList = spiceRepository.findAll();
		
		for(Wine w : wineList) {
			kieSession.insert(w);
		}
		
		for(Meat m : meatList) {
			kieSession.insert(m);
		}
		
		for(Sauce s : sauceList) {
			kieSession.insert(s);
		}
		
		for(Spice sp : spiceList) {
			kieSession.insert(sp);		
		}	
		kieSession.insert(answers);
		
		
		kieSession.setGlobal("foundWine", foundWine);
		
		kieSession.getAgenda().getAgendaGroup("prva_grupa_pravila").setFocus();
		int fired = kieSession.fireAllRules();
		System.out.println("Broj aktiviranih pravila "+ fired);
		
	    Wine foundW = (Wine) kieSession.getGlobal("foundWine");
	    
		kieSession.dispose();
		return foundW;
		
	}


	@Override
	public Collection<Wine> findWineList(Answers answers) {
		
		KieServices ks = KieServices.Factory.get();
		KieContainer kieContainer = ks.getKieClasspathContainer();
    	KieSession kieSession = kieContainer.newKieSession("ksession-rules");
    	
		
    	
		Collection<Wine> wineList = wineRepository.findAll();
		Collection<Meat> meatList = meatRepository.findAll();
		Collection<Sauce> sauceList = sauceRepository.findAll();
		Collection<Spice> spiceList = spiceRepository.findAll();
		
		for(Wine w : wineList) {
			kieSession.insert(w);
		}
		
		for(Meat m : meatList) {
			kieSession.insert(m);
		}
		
		for(Sauce s : sauceList) {
			kieSession.insert(s);
		}
		
		for(Spice sp : spiceList) {
			kieSession.insert(sp);		
		}	
		kieSession.insert(answers);
		
		kieSession.getAgenda().getAgendaGroup("druga_grupa_pravila").setFocus();
		int fired = kieSession.fireAllRules();
		System.out.println("Broj aktiviranih pravila "+ fired);
		
		
		
		List<Wine> result = wineList.stream()
				.filter(w-> w.getScore() > 0 )
				.sorted(Comparator.comparingInt(Wine::getScore).reversed()).toList();
	     
		kieSession.dispose();
		return result;
	}


	@Override
	public Collection<Recipe> findRecipes(String wineName) {
		
		KieServices ks = KieServices.Factory.get();
		KieContainer kieContainer = ks.getKieClasspathContainer();
    	KieSession kieSession = kieContainer.newKieSession("ksession-rules");
    	
    	
    	Collection<Recipe> recipeList = recipeRepository.findAll();
    	
    	
    	for(Recipe r : recipeList) {
    		kieSession.insert(r);
    		
    	}
    	
    	
    	Wine wine = wineRepository.findByNameIgnoreCase(wineName);
    	 if(wine == null) {
    		 throw new RuntimeException("Vino nije pronadjeno"); 
    		 
    	 }
    	
    	kieSession.insert(wine);
    	
    	int fired = kieSession.fireAllRules();
    	System.out.println("Broj aktiviranih pravila "+ fired);
    	
    	QueryResults results = kieSession.getQueryResults("receptiZaVino", wine);
    	
    	List<Recipe> matchedRecipes = new ArrayList<>();
    	
    	for(QueryResultsRow row : results ) {
    		
    		Recipe r = (Recipe) row.get("$recipe");
    		matchedRecipes.add(r);
    		
    	}
    	matchedRecipes.sort(Comparator.comparingInt(Recipe:: getScore).reversed());
    	kieSession.dispose();
    	
		return matchedRecipes;
	}


	@Override
	public Collection<Wine> wineFilter(FilterDTO criteria) {
		
		KieServices ks = KieServices.Factory.get();
		KieContainer kieContainer = ks.getKieClasspathContainer();
    	KieSession kieSession = kieContainer.newKieSession("ksession-rules");
    	
    	List<Wine> filteredWines = new ArrayList<>();
    	Collection<Wine> wineList = wineRepository.findAll();
    	
    	
    	wineList.forEach(kieSession :: insert);
    	
    	kieSession.insert(criteria);
    	
    	kieSession.setGlobal("filteredWines", filteredWines);
    	
		int fired = kieSession.fireAllRules();
		System.out.println("Broj aktiviranih pravila "+ fired);
    	
    	kieSession.dispose();
		
		return filteredWines;
	}

}
