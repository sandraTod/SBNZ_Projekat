import { Wine } from './../../model/wine';
import { FilterWinesComponent } from './../filter-wines/filter-wines.component';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-wine-more-details',
  templateUrl: './wine-more-details.component.html',
  styleUrls: ['./wine-more-details.component.css']
})
export class WineMoreDetailsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data: any) { }

  selectedWine!: Wine;
  showStars!: boolean

  ngOnInit(): void {
    this.selectedWine = this.data.wine;
    this.showStars = this.data.showStars;
    console.log(this.selectedWine);
  }

  getStars(score: number): number {
    return Math.round(score / 20) ?? 0;
  }


}
