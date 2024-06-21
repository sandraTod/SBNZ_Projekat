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

import com.sbnz.model.Spice;
import com.sbnz.service.service.SpiceService;

@RestController
@RequestMapping(value = "/api/spice")
public class SpiceController {
	
	@Autowired
	SpiceService spiceService;
	
	@RequestMapping(
			value = "/getAll",
			method= RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE
	)
	@PreAuthorize("hasAuthority('SYSTEM_ADMIN')")
	ResponseEntity <Collection<Spice>> getAll(){
		Collection<Spice> spiceList = spiceService.getALL();
		return new ResponseEntity<>(spiceList,HttpStatus.OK);
	}
	
	
	@RequestMapping(
			value = "/deleteSpice/{id}",
			method = RequestMethod.PUT
		
	)
	@PreAuthorize("hasAuthority('SYSTEM_ADMIN')")
	ResponseEntity <?> deleteSpice(@PathVariable Long id){
		spiceService.deleteSpice(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@RequestMapping(
			value = "/addSpice",
			method = RequestMethod.POST,
			produces = MediaType.APPLICATION_JSON_VALUE,
			consumes = MediaType.APPLICATION_JSON_VALUE
		
	)
	@PreAuthorize("hasAuthority('SYSTEM_ADMIN')")
	ResponseEntity<?> addSpice(@RequestBody Spice spice){
	    spiceService.addSpice(spice);
		return new ResponseEntity<>(HttpStatus.OK);
	}

}
