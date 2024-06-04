import { MatDialog } from '@angular/material/dialog';
import { MeatService } from './../../services/meat.service';
import { Component, OnInit } from '@angular/core';
import { Meat } from 'src/app/model/meat';
import { DeleteEntityComponent } from '../delete-entity/delete-entity.component';

@Component({
  selector: 'app-meat',
  templateUrl: './meat.component.html',
  styleUrls: ['./meat.component.css']
})
export class MeatComponent implements OnInit {

  listOfMeat!: Meat[];

  constructor(private meatService: MeatService, private dialog: MatDialog) { }

  ngOnInit(): void {

    this.meatService.getAllMeat().subscribe(data =>{this.listOfMeat = data});
  }


  addMeat(){}


  deletePopup(id:any){

    var deletePopup = this.dialog.open(DeleteEntityComponent,{
      width: '30%',
      height: '200px',

    });
    deletePopup.afterClosed().subscribe(item =>{ 
      if(item == true){

        //this.wineService.deleteWine(id).subscribe()

      }

    });

  }

}
