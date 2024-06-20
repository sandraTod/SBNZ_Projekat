package com.sbnz.service.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sbnz.model.Sauce;

public interface SauceRepository extends JpaRepository<Sauce, Long> {
	
}
