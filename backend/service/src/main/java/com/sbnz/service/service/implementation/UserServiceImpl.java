package com.sbnz.service.service.implementation;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
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

	@Override
	public void deleteUser(Long id) {
		// TODO Auto-generated method stub
		userRepository.deleteById(id);
		
	}

	@Override
	public void addUser(User user) {
			PasswordEncoder enc = new BCryptPasswordEncoder();
			String encoded = enc.encode(user.getPassword());
			user.setPassword(encoded);
			userRepository.save(user);
		
	}

	@Override
	public User updateUser(User toUpdate){
		User old = userRepository.getReferenceById(toUpdate.getId());
		
		old.setAddress(toUpdate.getAddress());
		old.setCity(toUpdate.getCity());
		old.setName(toUpdate.getName());
		old.setLastname(toUpdate.getLastname());
		if(!old.getPassword().equals(toUpdate.getPassword())) {
			
			PasswordEncoder enc = new BCryptPasswordEncoder();
			String encoded = enc.encode(toUpdate.getPassword());
			old.setPassword(encoded);
		}
		old.setPhoneNum(toUpdate.getPhoneNum());
		old.setState(toUpdate.getState());
		
		User saved = userRepository.save(old);
		return saved;
	}

}
