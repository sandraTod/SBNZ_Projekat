import { SauceService } from './../../services/sauce.service';
import { Meat } from './../../model/meat';
import { MeatService } from './../../services/meat.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Wine } from 'src/app/model/wine';
import { AnyForUntypedForms } from '@angular/forms';

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

  notConnectedMeat!: any[];
  selectedMeat!: any;
  
  selectedSauce!: any;
  notConnectedSauce!: any[];


  

  constructor(@Inject(MAT_DIALOG_DATA) private data: any,  private ref: MatDialogRef<WineDetailsComponent>,
              private meatService: MeatService, private sauceService: SauceService) { }

  ngOnInit(): void {

    this.wineDetails = this.data.wine;
    this.option1 = this.wineDetails.wineColor;
    this.optionSugar1 = this.wineDetails.wineSugar;
   
    this.selectOption();
    this.selectOptionSugar();

    this.meatService.getMeats().subscribe(data =>{ 
      this.notConnectedMeat = data;
      this.selectedMeat = data[0].id }); 

    this.sauceService.getSauces().subscribe(data => {
      this.notConnectedSauce = data;
      this.selectedSauce = data[0].id }); 
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
  addMeat(){
    for(let i = 0; i<this.notConnectedMeat.length; i++){
        if(this.notConnectedMeat[i].id == this.selectedMeat){
          this.wineDetails.meatList.push(this.notConnectedMeat[i]);
          break;
        }
    }
    const index = this.notConnectedMeat.findIndex(i => i.id === this.selectedMeat);
      this.notConnectedMeat.splice(index, 1);
      this.meatService.updateIsConnected(this.selectedMeat).subscribe(()=>{console.log("Uspesan subscribe")});
    
  }

  deleteSauce(index: number){
    this.wineDetails.sauceList.splice(index,1);
  }
  addSauce(){
    for(let i = 0; i<this.notConnectedSauce.length; i++){
        if(this.notConnectedSauce[i].id == this.selectedSauce){
          this.wineDetails.sauceList.push(this.notConnectedSauce[i]);
          break;
        }
    }
    const index = this.notConnectedSauce.findIndex(i => i.id === this.selectedSauce);
      this.notConnectedSauce.splice(index, 1);
      this.sauceService.updateIsConnected(this.selectedSauce).subscribe(()=>{console.log("Uspesan subscribe")});
    
  }


}
