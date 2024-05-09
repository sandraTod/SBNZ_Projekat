package com.sbnz.service.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sbnz.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
	
	User findByUsername(String username);

}
