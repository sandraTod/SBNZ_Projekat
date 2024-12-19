package com.sbnz.service.service.implementation;

import java.util.Collection;

import org.kie.api.KieServices;
import org.kie.api.runtime.KieContainer;
import org.kie.api.runtime.KieSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sbnz.model.Answers;
import com.sbnz.model.Meat;
import com.sbnz.model.Sauce;
import com.sbnz.model.Spice;
import com.sbnz.model.Wine;
import com.sbnz.service.repository.MeatRepository;
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
		
		
		
		int fired = kieSession.fireAllRules();
		System.out.println("Broj aktiviranih pravila "+ fired);
		
	    Wine foundW = (Wine) kieSession.getGlobal("foundWine");
	    
		kieSession.dispose();
		return foundW;
		
	}

}
