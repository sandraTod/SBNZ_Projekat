import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Wine } from 'src/app/model/wine';
import { Recipe } from 'src/app/model/recipe';

@Component({
  selector: 'app-recipes-by-wine',
  templateUrl: './recipes-by-wine.component.html',
  styleUrls: ['./recipes-by-wine.component.css']
})
export class RecipesByWineComponent implements OnInit {

  wineName!: String;
  recipes: Recipe[] = [];
  searched = false;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  findRecipes(){
    this.userService.findReciperByWine(this.wineName).subscribe(data => {
      this.recipes = data;
      this.searched = true;
      console.log(this.recipes);
    });

  }

}
