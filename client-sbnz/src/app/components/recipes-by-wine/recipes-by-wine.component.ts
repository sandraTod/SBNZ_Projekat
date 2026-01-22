import { RecipeModalComponent } from './../recipe-modal/recipe-modal.component';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Wine } from 'src/app/model/wine';
import { Recipe } from 'src/app/model/recipe';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-recipes-by-wine',
  templateUrl: './recipes-by-wine.component.html',
  styleUrls: ['./recipes-by-wine.component.css']
})
export class RecipesByWineComponent implements OnInit {

  wineName!: String;
  recipes: Recipe[] = [];
  searched = false;
  constructor(private userService: UserService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  findRecipes(){
    this.userService.findReciperByWine(this.wineName).subscribe(data => {
      this.recipes = data;
      this.searched = true;
      console.log(this.recipes);
    });

  }
  
  openRecipeDetails(recipe: Recipe){
    var popup = this.dialog.open(RecipeModalComponent,{

      width: '50%',
      height: '600px',
      data:{
        recipe: recipe
      } 

    });
  }

}
