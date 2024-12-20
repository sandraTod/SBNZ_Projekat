package com.sbnz.service.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sbnz.model.User;
import com.sbnz.service.service.UserService;

@RestController
@RequestMapping(value = "/api/user")
public class UserController {
	
	@Autowired
	UserService userService;
	
	@RequestMapping(
			value = "/getAll",
			method= RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE
	)
	@PreAuthorize("hasAuthority('SYSTEM_ADMIN')")
	ResponseEntity <Collection<User>> getAll(){
		Collection<User> userList = userService.getAll();
		return new ResponseEntity<>(userList,HttpStatus.OK);
	}
	
	@RequestMapping(
			value = "/deleteUser/{id}",
			method = RequestMethod.PUT
		
	)
	@PreAuthorize("hasAuthority('SYSTEM_ADMIN')")
	ResponseEntity <?> deleteUser(@PathVariable Long id){
		userService.deleteUser(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@RequestMapping(
			value = "/addUser",
			method = RequestMethod.POST,
			produces = MediaType.APPLICATION_JSON_VALUE,
			consumes = MediaType.APPLICATION_JSON_VALUE
		
	)
	@PreAuthorize("hasAuthority('SYSTEM_ADMIN')")
	ResponseEntity<?> addUser(@RequestBody User user){
	    userService.addUser(user);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@RequestMapping(
			value = "/updateUser",
			method = RequestMethod.PUT,
			produces = MediaType.APPLICATION_JSON_VALUE,
			consumes = MediaType.APPLICATION_JSON_VALUE
	)
	ResponseEntity<User> updateUser(@RequestBody User toUpdate){
		User updated = userService.updateUser(toUpdate);
		return new ResponseEntity<>(updated, HttpStatus.OK);
		
	}

}
