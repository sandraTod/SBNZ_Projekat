package com.sbnz.service.repository;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sbnz.model.Spice;

public interface SpiceRepository extends JpaRepository<Spice, Long>{
	
	Collection<Spice> findByIsConnectedFalse();

}
