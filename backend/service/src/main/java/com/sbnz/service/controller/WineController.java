package com.sbnz.service.controller;

import java.util.Collection;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sbnz.model.Wine;
import com.sbnz.service.service.WineService;

@RestController
@RequestMapping(value = "/api/wine")
public class WineController {
	
	@Autowired
	private WineService wineService;
	
	
	@RequestMapping(
			value = "/getAll",
			method = RequestMethod.GET,
			produces = MediaType.APPLICATION_JSON_VALUE
	)
	ResponseEntity <Collection<Wine>> getAll(){
		Collection<Wine> wineList = wineService.getAll();
		return new ResponseEntity<>(wineList, HttpStatus.OK);
	}

}
