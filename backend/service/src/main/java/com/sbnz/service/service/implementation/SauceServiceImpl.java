package com.sbnz.service.service.implementation;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sbnz.model.Sauce;
import com.sbnz.service.repository.SauceRepository;
import com.sbnz.service.service.SauceService;

@Service
public class SauceServiceImpl implements SauceService {
	
	@Autowired
	SauceRepository sauceRepository;
	
	@Override
	public Collection<Sauce> getALL() {
		// TODO Auto-generated method stub
		return sauceRepository.findAll();
	}

	@Override
	public void deleteSauce(Long id) {
		sauceRepository.deleteById(id);
		
	}

	@Override
	public void addSauce(Sauce sauce) {
		sauceRepository.save(sauce);
		
	}

}
