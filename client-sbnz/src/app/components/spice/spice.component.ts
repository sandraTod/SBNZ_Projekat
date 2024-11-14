import { MatDialog } from '@angular/material/dialog';
import { SpiceService } from './../../services/spice.service';
import { Component, OnInit } from '@angular/core';
import { Spice } from 'src/app/model/spice';
import { DeleteEntityComponent } from '../delete-entity/delete-entity.component';
import { AddSpiceComponent } from '../add-spice/add-spice.component';
import { SpiceDetailsComponent } from '../spice-details/spice-details.component';

@Component({
  selector: 'app-spice',
  templateUrl: './spice.component.html',
  styleUrls: ['./spice.component.css']
})
export class SpiceComponent implements OnInit {

  listOfSpices!: Spice[];

  constructor(private spiceService: SpiceService, private dialog: MatDialog, ) { }

  ngOnInit(): void {

    this.spiceService.getAllSpices().subscribe(data => { this.listOfSpices = data});
  }

  deletePopup(id: any){
    var deletePopup = this.dialog.open(DeleteEntityComponent,{
      width: '28%',
      height: '180px',

    });
    deletePopup.afterClosed().subscribe(item =>{ 
      if(item == true){
        this.spiceService.deleteSpice(id).subscribe();

        const index = this.listOfSpices.findIndex(i => i.id == id);
        this.listOfSpices.splice(index, 1);
      }

    });

  }

  addSpice(){

    var popup = this.dialog.open(AddSpiceComponent,{

      width: '40%',
      height: '325px',

    });
    popup.afterClosed().subscribe(newSauce =>{
    
      this.spiceService.getAllSpices().subscribe(data => {this.listOfSpices = data});

    });

  }

  spiceDetails(spice: Spice){

    var popup = this.dialog.open(SpiceDetailsComponent,{

      width: '40%',
      height: '325px',
      data: {
        spice: spice
      }

    });

  }

}
