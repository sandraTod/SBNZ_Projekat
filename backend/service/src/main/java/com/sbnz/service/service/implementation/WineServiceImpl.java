package com.sbnz.service.service.implementation;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sbnz.model.Wine;
import com.sbnz.service.repository.WineRepository;
import com.sbnz.service.service.WineService;

@Service
public class WineServiceImpl implements WineService{
	
	@Autowired
	private WineRepository wineRepository;

	@Override
	public Collection<Wine> getAll() {
		
		return wineRepository.findAll();
	}

	@Override
	public void deleteWine(Long id) {
		 wineRepository.deleteById(id);
	}

	@Override
	public Wine updateWine(Wine toUpdate) {
		Wine old = wineRepository.getReferenceById(toUpdate.getId());
		old.setName(toUpdate.getName());
		old.setYear(toUpdate.getYear());
		old.setWineColor(toUpdate.getWineColor());
		old.setWineSugar(toUpdate.getWineSugar());
		old.setSpiceList(toUpdate.getSpiceList());
		old.setSauceList(toUpdate.getSauceList());
		old.setMeatList(toUpdate.getMeatList());
		
		Wine saved = wineRepository.save(old);
		return saved;
	}

}
