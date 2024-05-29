import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Wine } from 'src/app/model/wine';

@Component({
  selector: 'app-wine-details',
  templateUrl: './wine-details.component.html',
  styleUrls: ['./wine-details.component.css']
})
export class WineDetailsComponent implements OnInit {

  wineDetails!: Wine;
  option1!: string;
  option2!: string;

  optionSugar1!: string;
  optionSugar2!: string;

  

  constructor(@Inject(MAT_DIALOG_DATA) private data: any,  private ref: MatDialogRef<WineDetailsComponent>) { }

  ngOnInit(): void {

    this.wineDetails = this.data.wine;
    console.log(this.wineDetails);
    this.option1 = this.wineDetails.wineColor;
    this.optionSugar1 = this.wineDetails.wineSugar;
   
    this.selectOption();
    this.selectOptionSugar();
  }

  selectOption(){
    if(this.wineDetails.wineColor=="WHITE"){

      this.option2 = "RED";
    }
    else{
      this.option2 = "WHITE";
    }
    return this.option2;
  }

  selectOptionSugar(){
    if(this.wineDetails.wineSugar == "SWEET"){
        
      this.optionSugar2 = "DRY"
    }
    else{
      this.optionSugar2 = "SWEET"
    }

  }
  deleteMeat(index: number){
    this.wineDetails.meatList.splice(index,1);
  }

}
