package com.sbnz.service.service.implementation;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sbnz.model.User;
import com.sbnz.service.repository.UserRepository;
import com.sbnz.service.service.UserService;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	UserRepository userRepository;

	@Override
	public Collection<User> getAll() {
		// TODO Auto-generated method stub
		return userRepository.findAll();
	}

}
