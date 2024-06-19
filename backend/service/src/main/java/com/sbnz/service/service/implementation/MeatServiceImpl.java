package com.sbnz.service.service.implementation;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sbnz.model.Meat;
import com.sbnz.service.repository.MeatRepository;
import com.sbnz.service.service.MeatService;

@Service
public class MeatServiceImpl implements MeatService {
	
	@Autowired
	MeatRepository meatRepository;

	@Override
	public Collection<Meat> getALL() {
		// TODO Auto-generated method stub
		return meatRepository.findAll();
	}



	@Override
	public void deleteMeat(Long id) {
		meatRepository.deleteById(id);
		
	}

	@Override
	public void addMeat(Meat meat) {
		meatRepository.save(meat);
		
	}

}
