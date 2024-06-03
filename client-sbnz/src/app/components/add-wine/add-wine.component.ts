import { Meat } from './../../model/meat';
import { WineService } from './../../services/wine.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WineDetailsComponent } from '../wine-details/wine-details.component';
import { Wine } from 'src/app/model/wine';
import { MeatService } from 'src/app/services/meat.service';
import { SauceService } from 'src/app/services/sauce.service';
import { SpiceService } from 'src/app/services/spice.service';

@Component({
  selector: 'app-add-wine',
  templateUrl: './add-wine.component.html',
  styleUrls: ['./add-wine.component.css']
})
export class AddWineComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data: any,  private ref: MatDialogRef<WineDetailsComponent>,
              private wineService: WineService, private meatService: MeatService, private sauceService: SauceService, 
              private spiceService: SpiceService) { }

  newWine: Wine =  {
     name : '',
     year: 2024,
     wineColor: "WHITE",
     wineSugar: "DRY",
     meatList: [],
     sauceList: [],
     spiceList: []

  }

  notConnectedMeat!: any[];
  selectedMeat!: any;
  
  selectedSauce!: any;
  notConnectedSauce!: any[];

  selectedSpice!: any;
  notConnectedSpice!: any[];



  ngOnInit(): void {

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

  addMeat(){
    for(let i = 0; i<this.notConnectedMeat.length; i++){
        if(this.notConnectedMeat[i].id == this.selectedMeat){
          this.newWine.meatList.push(this.notConnectedMeat[i]);
          break;
        }
    }
    const index = this.notConnectedMeat.findIndex(i => i.id == this.selectedMeat);
    this.notConnectedMeat.splice(index, 1);
    this.meatService.updateIsConnected(this.selectedMeat).subscribe(()=>{console.log("Uspesan subscribe")});
    this.selectedMeat = this.notConnectedMeat[0].id;
    
  }
  deleteMeat(index: number,id:any){
    this.notConnectedMeat.push(this.newWine.meatList[index]);
    this.newWine.meatList.splice(index,1);
    this.meatService.deleteConnection(id).subscribe();
  }

  addSauce(){
    for(let i = 0; i<this.notConnectedSauce.length; i++){
        if(this.notConnectedSauce[i].id == this.selectedSauce){
          this.newWine.sauceList.push(this.notConnectedSauce[i]);
          break;
        }
    }
    const index = this.notConnectedSauce.findIndex(i => i.id == this.selectedSauce);
      this.notConnectedSauce.splice(index, 1);
      this.sauceService.updateIsConnected(this.selectedSauce).subscribe(()=>{console.log("Uspesan subscribe")});
      this.selectedSauce = this.notConnectedSauce[0].id;
    
  }

  deleteSauce(index: number, id: any){
    this.notConnectedSauce.push(this.newWine.sauceList[index]);
    this.newWine.sauceList.splice(index,1);
    this.sauceService.deleteConnection(id).subscribe();
    
  }

  addSpice(){
    for(let i = 0; i<this.notConnectedSpice.length; i++){
        if(this.notConnectedSpice[i].id == this.selectedSpice){
          this.newWine.spiceList.push(this.notConnectedSpice[i]);
          break;
        }
    }
    const index = this.notConnectedSpice.findIndex(i => i.id == this.selectedSpice);
      this.notConnectedSpice.splice(index, 1);
      this.spiceService.updateIsConnected(this.selectedSpice).subscribe(()=>{console.log("Uspesan subscribe")});
      this.selectedSpice = this.notConnectedSpice[0].id;
    
  }

  deleteSpice(index: number, id:any){
    this.notConnectedSpice.push(this.newWine.spiceList[index]);
    this.newWine.spiceList.splice(index,1);
    this.spiceService.deleteConnection(id).subscribe();
  }


}


