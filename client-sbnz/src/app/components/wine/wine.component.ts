import { WineService } from './../../services/wine.service';
import { Component, OnInit } from '@angular/core';
import { Wine } from 'src/app/model/wine';
import { WineDetailsComponent } from '../wine-details/wine-details.component';
import { MatDialog } from '@angular/material/dialog';
import { DeleteEntityComponent } from '../delete-entity/delete-entity.component';
import { stringify } from 'querystring';

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
      width: '30%',
      height: '200px',

    });
    deletePopup.afterClosed().subscribe(item =>{ 
      if(item == true){

        this.wineService.deleteWine(id).subscribe()

      }

});

    

  }

}
