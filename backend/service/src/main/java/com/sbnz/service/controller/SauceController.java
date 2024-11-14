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

import com.sbnz.model.Sauce;
import com.sbnz.service.service.SauceService;

@RestController
@RequestMapping(value= "/api/sauce")
public class SauceController {
	
	@Autowired
	SauceService sauceService;

	
	@RequestMapping(
			value = "/getAll",
			method= RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE
	)
	@PreAuthorize("hasAuthority('SYSTEM_ADMIN')")
	ResponseEntity <Collection<Sauce>> getAll(){
		Collection<Sauce> sauceList = sauceService.getALL();
		return new ResponseEntity<>(sauceList,HttpStatus.OK);
	}
	
	@RequestMapping(
			value = "/deleteSauce/{id}",
			method = RequestMethod.PUT
		
	)
	@PreAuthorize("hasAuthority('SYSTEM_ADMIN')")
	ResponseEntity <?> deleteSauce(@PathVariable Long id){
		sauceService.deleteSauce(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@RequestMapping(
			value = "/addSauce",
			method = RequestMethod.POST,
			produces = MediaType.APPLICATION_JSON_VALUE,
			consumes = MediaType.APPLICATION_JSON_VALUE
		
	)
	@PreAuthorize("hasAuthority('SYSTEM_ADMIN')")
	ResponseEntity<?> addSauce(@RequestBody Sauce sauce){
	    sauceService.addSauce(sauce);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@RequestMapping(
			value = "/updateSauce",
			method = RequestMethod.PUT,
			consumes = MediaType.APPLICATION_JSON_VALUE,
			produces = MediaType.APPLICATION_JSON_VALUE
			
	)
	@PreAuthorize("hasAuthority('SYSTEM_ADMIN')")
	ResponseEntity<Sauce> updateSauce(@RequestBody Sauce toUpdate){
		Sauce updated = sauceService.updateSauce(toUpdate);
		return new ResponseEntity<>(updated, HttpStatus.OK);
		
	}
}
