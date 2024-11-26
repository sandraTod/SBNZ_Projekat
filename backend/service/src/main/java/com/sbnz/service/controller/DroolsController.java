package com.sbnz.service.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sbnz.model.Answers;
import com.sbnz.model.Wine;
import com.sbnz.service.service.DroolsService;


@RestController
@RequestMapping(value = "/api/drools")
public class DroolsController {
	
	@Autowired
	DroolsService droolsService;
	
	@RequestMapping(
			path = "/findWine",
			method = RequestMethod.POST,
			consumes = MediaType.APPLICATION_JSON_VALUE,
			produces = MediaType.APPLICATION_JSON_VALUE
			
	)
	@PreAuthorize("hasAuthority('USER')")
	ResponseEntity<Wine> findWine(@RequestBody Answers answers ){
		
		Wine found = droolsService.findWine(answers);
		return new ResponseEntity<>(found,HttpStatus.OK);
		
	}

}
