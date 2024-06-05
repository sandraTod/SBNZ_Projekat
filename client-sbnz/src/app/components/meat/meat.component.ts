import { MatDialog } from '@angular/material/dialog';
import { MeatService } from './../../services/meat.service';
import { Component, OnInit } from '@angular/core';
import { Meat } from 'src/app/model/meat';
import { DeleteEntityComponent } from '../delete-entity/delete-entity.component';
import { AddMeatComponent } from '../add-meat/add-meat.component';

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




  deletePopup(id:any){

    var deletePopup = this.dialog.open(DeleteEntityComponent,{
      width: '28%',
      height: '180px',

    });
    deletePopup.afterClosed().subscribe(item =>{ 
      if(item == true){
        this.meatService.deleteMeat(id).subscribe();

        const index = this.listOfMeat.findIndex(i => i.id == id);
        this.listOfMeat.splice(index, 1);
        

      }

    });

  }

  addMeat(){
    var popup = this.dialog.open(AddMeatComponent,{

      width: '50%',
      height: '325px',

    });
    popup.afterClosed().subscribe(newMeat =>{
    
      this.meatService.getAllMeat().subscribe(data => {this.listOfMeat = data});

    });

  }

}  

