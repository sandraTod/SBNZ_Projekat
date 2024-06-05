package com.sbnz.service.service.implementation;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sbnz.model.Spice;
import com.sbnz.service.repository.SpiceRepository;
import com.sbnz.service.service.SpiceService;

@Service
public class SpiceServiceImpl implements SpiceService{
	
	@Autowired
	SpiceRepository spiceRepository;

	@Override
	public Collection<Spice> getALL() {
		// TODO Auto-generated method stub
		return spiceRepository.findAll();
	}

	@Override
	public Collection<Spice> getSpices() {
		// TODO Auto-generated method stub
		return  spiceRepository.findByIsConnectedFalse();
	}

	@Override
	public void updateIsConnected(Long id) {
		Spice spice  = spiceRepository.getReferenceById(id);
		spice.setConnected(true);
		spiceRepository.save(spice);
		System.out.println(spice.isConnected());
		
	}

	@Override
	public void deleteConnection(Long id) {
		Spice spice  = spiceRepository.getReferenceById(id);
		spice.setConnected(false);
		spiceRepository.save(spice);
		System.out.println(spice.isConnected());
		
	}

	@Override
	public void deleteSpice(Long id) {
		spiceRepository.deleteById(id);
	}

	@Override
	public void addSpice(Spice spice) {
		spiceRepository.save(spice);
		
	}

}
