import { RecipesByWineComponent } from './../recipes-by-wine/recipes-by-wine.component';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Recipe } from 'src/app/model/recipe';

@Component({
  selector: 'app-recipe-modal',
  templateUrl: './recipe-modal.component.html',
  styleUrls: ['./recipe-modal.component.css']
})
export class RecipeModalComponent implements OnInit {
   
  recipe!: Recipe;
  constructor(@Inject(MAT_DIALOG_DATA) private data: any,  private ref: MatDialogRef<RecipesByWineComponent>) { }

  ngOnInit(): void {
    this.recipe = this.data.recipe;
    console.log(this.recipe);
  }

  getStars(score: number): number {
    return Math.round(score / 20);
  }

}
