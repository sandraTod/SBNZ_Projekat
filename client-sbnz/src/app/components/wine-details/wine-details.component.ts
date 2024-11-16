import { WineService } from './../../services/wine.service';
import { SpiceService } from './../../services/spice.service';
import { SauceService } from './../../services/sauce.service';
import { Meat } from './../../model/meat';
import { MeatService } from './../../services/meat.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Wine } from 'src/app/model/wine';
import { kMaxLength } from 'buffer';


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

  notAddedMeats!: any[];
  selectedMeat!: any;
 
  notAddedSauces!: any[];
  selectedSauce!: any;


  notAddedSpices!: any[];
  selectedSpice!: any;


  

  constructor(@Inject(MAT_DIALOG_DATA) private data: any,  private ref: MatDialogRef<WineDetailsComponent>,
              private meatService: MeatService, 
              private sauceService: SauceService, 
              private spiceService: SpiceService, private wineService: WineService) { }

  ngOnInit(): void {

    this.wineDetails = this.data.wine;
    this.option1 = this.wineDetails.wineColor;
    this.optionSugar1 = this.wineDetails.wineSugar;
   
    this.selectOption();
    this.selectOptionSugar();

    this.notAddedMeat();
    this.notAddedSauce();
    this.notAddedSpice();
  }

  selectOption(){
    if(this.wineDetails.wineColor=="BELO"){

      this.option2 = "CRVENO";
    }
    else{
      this.option2 = "BELO";
    }
    return this.option2;
  }

  selectOptionSugar(){
    if(this.wineDetails.wineSugar == "SLATKO"){
        
      this.optionSugar2 = "SUVO"
    }
    else{
      this.optionSugar2 = "SLATKO"
    }

  }
  deleteMeat(index: number,id:any){
    this.notAddedMeats.push(this.wineDetails.meatList[index]);
    this.wineDetails.meatList.splice(index,1);
  }


  notAddedMeat(){
    this.meatService.getAllMeat().subscribe(data =>{ 
      this.notAddedMeats = data;
      for(let i = 0; i<this.wineDetails.meatList.length; i++){
        for(let j = 0; j< this.notAddedMeats.length; j++){
          if(this.wineDetails.meatList[i].id == this.notAddedMeats[j].id){
            this.notAddedMeats = this.notAddedMeats.filter(meat => meat.id !== this.wineDetails.meatList[i].id)
            break;
          }
        }

      }
      this.selectedMeat = this.notAddedMeats[0].id;  console.log(data); console.log(this.notAddedMeats)}); 
    
  }

  addMeat(){
    for(let i = 0; i<this.notAddedMeats.length; i++){
        if(this.notAddedMeats[i].id == this.selectedMeat){
          this.wineDetails.meatList.push(this.notAddedMeats[i]);
          break;
        }
    }
    const index = this.notAddedMeats.findIndex(i => i.id == this.selectedMeat);
    this.notAddedMeats.splice(index, 1);
    this.selectedMeat = this.notAddedMeats[0].id;
    
  }


  deleteSauce(index: number, id: any){
    this.notAddedSauces.push(this.wineDetails.sauceList[index]);
    this.wineDetails.sauceList.splice(index,1);
    
  }

  notAddedSauce(){

    this.sauceService.getAllSauces().subscribe(data =>{ 
      this.notAddedSauces = data;
      for(let i = 0; i<this.wineDetails.sauceList.length; i++){
        for(let j = 0; j< this.notAddedSauces.length; j++){
          if(this.wineDetails.sauceList[i].id == this.notAddedSauces[j].id){
            this.notAddedSauces = this.notAddedSauces.filter(sauce => sauce.id !== this.wineDetails.sauceList[i].id)
            break;
          }
        }

      }
      this.selectedSauce = this.notAddedSauces[0].id;  console.log(data); console.log(this.notAddedSauces)}); 
    
  }
  addSauce(){
    for(let i = 0; i<this.notAddedSauces.length; i++){
        if(this.notAddedSauces[i].id == this.selectedSauce){
          this.wineDetails.sauceList.push(this.notAddedSauces[i]);
          break;
        }
    }
    const index = this.notAddedSauces.findIndex(i => i.id == this.selectedSauce);
      this.notAddedSauces.splice(index, 1);
      this.selectedSauce = this.notAddedSauces[0].id;
    
  }


  deleteSpice(index: number, id:any){
    this.notAddedSpices.push(this.wineDetails.spiceList[index]);
    this.wineDetails.spiceList.splice(index,1);
  }

  notAddedSpice(){

    this.spiceService.getAllSpices().subscribe(data =>{ 
      this.notAddedSpices = data;
      for(let i = 0; i<this.wineDetails.spiceList.length; i++){
        for(let j = 0; j< this.notAddedSpices.length; j++){
          if(this.wineDetails.spiceList[i].id == this.notAddedSpices[j].id){
            this.notAddedSpices = this.notAddedSpices.filter(spice => spice.id !== this.wineDetails.spiceList[i].id)
            break;
          }
        }

      }
      this.selectedSpice = this.notAddedSpices[0].id;  console.log(data); console.log(this.notAddedSpices)}); 
    
  }
  
  addSpice(){
    for(let i = 0; i<this.notAddedSpices.length; i++){
        if(this.notAddedSpices[i].id == this.selectedSpice){
          this.wineDetails.spiceList.push(this.notAddedSpices[i]);
          break;
        }
    }
    const index = this.notAddedSpices.findIndex(i => i.id == this.selectedSpice);
      this.notAddedSpices.splice(index, 1);
      this.selectedSpice = this.notAddedSpices[0].id;
    
  }

  updateWine(){
      this.wineService.updateWine(this.wineDetails).subscribe(data=>{console.log(data)});
      this.ref.close();
  }


}
