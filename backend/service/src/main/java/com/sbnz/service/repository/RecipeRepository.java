package com.sbnz.service.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sbnz.model.Recipe;

public interface RecipeRepository extends JpaRepository<Recipe, Long>{

}
