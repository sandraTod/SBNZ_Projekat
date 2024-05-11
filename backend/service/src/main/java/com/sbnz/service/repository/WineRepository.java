package com.sbnz.service.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sbnz.model.Wine;

public interface WineRepository extends JpaRepository<Wine, Long> {

}
