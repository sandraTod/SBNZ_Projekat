package com.sbnz.service.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PathVariable;
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
			value = "/getSpices",
			method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE
	)
	@PreAuthorize("hasAuthority('SYSTEM_ADMIN')")
	ResponseEntity <Collection<Spice>> getSpices(){
		Collection<Spice> spiceList = spiceService.getSpices();
		return new ResponseEntity<>(spiceList, HttpStatus.OK);
	}
	
	@RequestMapping(
			value = "/isConnected/{id}",
			method = RequestMethod.	PATCH,
			produces = MediaType.APPLICATION_JSON_VALUE
	)
	@PreAuthorize("hasAuthority('SYSTEM_ADMIN')")
	ResponseEntity <?> updateIsConnected(@PathVariable Long id){
		spiceService.updateIsConnected(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@RequestMapping(
			value = "/deleteConnection/{id}",
			method = RequestMethod.	PATCH,
			produces = MediaType.APPLICATION_JSON_VALUE
	)
	@PreAuthorize("hasAuthority('SYSTEM_ADMIN')")
	ResponseEntity <?> deleteConnection(@PathVariable Long id){
		spiceService.deleteConnection(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}

}
