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

import com.sbnz.model.Meat;
import com.sbnz.model.Wine;
import com.sbnz.service.repository.MeatRepository;
import com.sbnz.service.service.MeatService;

@RestController
@RequestMapping(value = "/api/meat")
public class MeatController {
	
	@Autowired
	MeatService meatService;
	
	
	@RequestMapping(
			value = "/getAll",
			method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE
	)
	@PreAuthorize("hasAuthority('SYSTEM_ADMIN')")
	ResponseEntity <Collection<Meat>> getAll(){
		Collection<Meat> meatList = meatService.getALL();
		return new ResponseEntity<>(meatList, HttpStatus.OK);
	}
	
	@RequestMapping(
			value = "/getMeats",
			method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE
	)
	@PreAuthorize("hasAuthority('SYSTEM_ADMIN')")
	ResponseEntity <Collection<Meat>> getMeats(){
		Collection<Meat> meatList = meatService.getMeats();
		return new ResponseEntity<>(meatList, HttpStatus.OK);
	}
	
	@RequestMapping(
			value = "/deleteMeat/{id}",
			method = RequestMethod.PUT
		
	)
	@PreAuthorize("hasAuthority('SYSTEM_ADMIN')")
	ResponseEntity <Collection<Wine>> deleteMeat(@PathVariable Long id){
		meatService.deleteMeat(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	
	@RequestMapping(
			value = "/isConnected/{id}",
			method = RequestMethod.	PATCH,
			produces = MediaType.APPLICATION_JSON_VALUE
	)
	@PreAuthorize("hasAuthority('SYSTEM_ADMIN')")
	ResponseEntity <?> updateIsConnected(@PathVariable Long id){
		meatService.updateIsConnected(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@RequestMapping(
			value = "/deleteConnection/{id}",
			method = RequestMethod.	PATCH,
			produces = MediaType.APPLICATION_JSON_VALUE
	)
	@PreAuthorize("hasAuthority('SYSTEM_ADMIN')")
	ResponseEntity <?> deleteConnection(@PathVariable Long id){
		meatService.deleteConnection(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@RequestMapping(
			value = "/addMeat",
			method = RequestMethod.POST,
			produces = MediaType.APPLICATION_JSON_VALUE,
			consumes = MediaType.APPLICATION_JSON_VALUE
		
	)
	@PreAuthorize("hasAuthority('SYSTEM_ADMIN')")
	ResponseEntity<?> addMeat(@RequestBody Meat meat){
	    meatService.addMeat(meat);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	

}
