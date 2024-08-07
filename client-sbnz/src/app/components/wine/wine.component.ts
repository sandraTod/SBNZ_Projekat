import { WineService } from './../../services/wine.service';
import { Component, OnInit } from '@angular/core';
import { Wine } from 'src/app/model/wine';
import { WineDetailsComponent } from '../wine-details/wine-details.component';
import { MatDialog } from '@angular/material/dialog';
import { DeleteEntityComponent } from '../delete-entity/delete-entity.component';
import { stringify } from 'querystring';
import { AddWineComponent } from '../add-wine/add-wine.component';

@Component({
  selector: 'app-wine',
  templateUrl: './wine.component.html',
  styleUrls: ['./wine.component.css']
})
export class WineComponent implements OnInit {

   listOfWines!: Wine[];

  constructor( private wineService: WineService, private dialog: MatDialog) { }

  ngOnInit(): void {

    this.wineService.getAllWine().subscribe(data=>{ this.listOfWines = data; console.log(data)}); 
  }

  wineDetails(wine: Wine){

    var popup = this.dialog.open(WineDetailsComponent,{

      width: '50%',
      height: '600px',
      data:{
        wine: wine
      } 

    });

  }


  deletePopup(id:any){

    var deletePopup = this.dialog.open(DeleteEntityComponent,{
      width: '28%',
      height: '180px',

    });
    deletePopup.afterClosed().subscribe(item =>{ 
      if(item == true){
        this.wineService.deleteWine(id).subscribe();

        const index = this.listOfWines.findIndex(i => i.id == id);
        this.listOfWines.splice(index, 1);

      }

    });

  }

  addWine(){

    var popup = this.dialog.open(AddWineComponent,{

      width: '50%',
      height: '600px',

    });
    popup.afterClosed().subscribe(newWine =>{
     
      this.wineService.getAllWine().subscribe(data => {this.listOfWines = data})

    });

  }

}
