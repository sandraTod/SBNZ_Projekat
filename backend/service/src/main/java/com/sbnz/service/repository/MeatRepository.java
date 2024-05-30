package com.sbnz.service.repository;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sbnz.model.Meat;

public interface MeatRepository extends JpaRepository<Meat, Long> {
	
	
	Collection<Meat> findByIsConnectedFalse();

}
