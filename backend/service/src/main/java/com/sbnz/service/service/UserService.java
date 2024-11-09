package com.sbnz.service.service;

import java.util.Collection;

import com.sbnz.model.User;

public interface UserService {
	
	Collection<User> getAll();
	
	void deleteUser(Long id);
	
	void addUser(User user);
	
	User updateUser(User user);

}
