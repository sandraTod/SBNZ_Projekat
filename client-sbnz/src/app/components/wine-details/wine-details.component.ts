import { WineService } from './../../services/wine.service';
import { SpiceService } from './../../services/spice.service';
import { SauceService } from './../../services/sauce.service';
import { Meat } from './../../model/meat';
import { MeatService } from './../../services/meat.service';
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

  notConnectedMeat!: any[];
  selectedMeat!: any;
  
  selectedSauce!: any;
  notConnectedSauce!: any[];

  selectedSpice!: any;
  notConnectedSpice!: any[];


  

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

    this.meatService.getMeats().subscribe(data =>{ 
      this.notConnectedMeat = data;
      this.selectedMeat = data[0].id;  console.log(data);}); 

    this.sauceService.getSauces().subscribe(data => {
      this.notConnectedSauce = data;
      this.selectedSauce = data[0].id }); 

    this.spiceService.getSpices().subscribe(data =>{
      this.notConnectedSpice = data;
      this.selectedSpice = data[0].id});
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
  deleteMeat(index: number,id:any){
    this.notConnectedMeat.push(this.wineDetails.meatList[index]);
    this.wineDetails.meatList.splice(index,1);
    this.meatService.deleteConnection(id).subscribe();
  }

  addMeat(){
    for(let i = 0; i<this.notConnectedMeat.length; i++){
        if(this.notConnectedMeat[i].id == this.selectedMeat){
          this.wineDetails.meatList.push(this.notConnectedMeat[i]);
          break;
        }
    }
    const index = this.notConnectedMeat.findIndex(i => i.id == this.selectedMeat);
    this.notConnectedMeat.splice(index, 1);
    this.meatService.updateIsConnected(this.selectedMeat).subscribe(()=>{console.log("Uspesan subscribe")});
    this.selectedMeat = this.notConnectedMeat[0].id;
    
  }

  deleteSauce(index: number, id: any){
    this.notConnectedSauce.push(this.wineDetails.sauceList[index]);
    this.wineDetails.sauceList.splice(index,1);
    this.sauceService.deleteConnection(id).subscribe();
    
  }
  addSauce(){
    for(let i = 0; i<this.notConnectedSauce.length; i++){
        if(this.notConnectedSauce[i].id == this.selectedSauce){
          this.wineDetails.sauceList.push(this.notConnectedSauce[i]);
          break;
        }
    }
    const index = this.notConnectedSauce.findIndex(i => i.id == this.selectedSauce);
      this.notConnectedSauce.splice(index, 1);
      this.sauceService.updateIsConnected(this.selectedSauce).subscribe(()=>{console.log("Uspesan subscribe")});
      this.selectedSauce = this.notConnectedSauce[0].id;
    
  }


  deleteSpice(index: number, id:any){
    this.notConnectedSpice.push(this.wineDetails.spiceList[index]);
    this.wineDetails.spiceList.splice(index,1);
    this.spiceService.deleteConnection(id).subscribe();
  }
  
  addSpice(){
    for(let i = 0; i<this.notConnectedSpice.length; i++){
        if(this.notConnectedSpice[i].id == this.selectedSpice){
          this.wineDetails.spiceList.push(this.notConnectedSpice[i]);
          break;
        }
    }
    const index = this.notConnectedSpice.findIndex(i => i.id == this.selectedSpice);
      this.notConnectedSpice.splice(index, 1);
      this.spiceService.updateIsConnected(this.selectedSpice).subscribe(()=>{console.log("Uspesan subscribe")});
      this.selectedSpice = this.notConnectedSpice[0].id;
    
  }

  updateWine(){
      this.wineService.updateWine(this.wineDetails).subscribe(data=>{console.log(data)});
  }


}
