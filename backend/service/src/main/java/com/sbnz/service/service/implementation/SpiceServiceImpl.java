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
	public void deleteSpice(Long id) {
		spiceRepository.deleteById(id);
	}

	@Override
	public void addSpice(Spice spice) {
		spiceRepository.save(spice);
		
	}

	@Override
	public Spice updateSpice(Spice toUpdate) {
		Spice old = spiceRepository.getReferenceById(toUpdate.getId());
		old.setName(toUpdate.getName());
		old.setNationalCuisine(toUpdate.getNationalCuisine());
		
		Spice saved = spiceRepository.save(old);
		return saved;
	}

}
