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
	public Collection<Sauce> getSauces() {
		// TODO Auto-generated method stub
		return sauceRepository.findByIsConnectedFalse();
	}

	@Override
	public void updateIsConnected(Long id) {
		Sauce sauce = sauceRepository.getReferenceById(id);
		sauce.setConnected(true);
		sauceRepository.save(sauce);
		System.out.println(sauce.isConnected());
		
	}

	@Override
	public void deleteConnection(Long id) {
		Sauce sauce = sauceRepository.getReferenceById(id);
		sauce.setConnected(false);
		sauceRepository.save(sauce);
		System.out.println(sauce.isConnected());
		
	}

}
