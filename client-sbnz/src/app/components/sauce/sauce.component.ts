import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Sauce } from 'src/app/model/sauce';
import { SauceService } from 'src/app/services/sauce.service';
import { AddSauceComponent } from '../add-sauce/add-sauce.component';
import { DeleteEntityComponent } from '../delete-entity/delete-entity.component';
import { SauceDetailsComponent } from '../sauce-details/sauce-details.component';

@Component({
  selector: 'app-sauce',
  templateUrl: './sauce.component.html',
  styleUrls: ['./sauce.component.css']
})
export class SauceComponent implements OnInit {

  listOfSauces!: Sauce[];

  constructor(private dialog: MatDialog ,private sauceService: SauceService) { }

  ngOnInit(): void {
    this.sauceService.getAllSauces().subscribe(data => {this.listOfSauces = data});
  }

  deletePopup(id: any){

    var deletePopup = this.dialog.open(DeleteEntityComponent,{
      width: '28%',
      height: '180px',

    });
    deletePopup.afterClosed().subscribe(item =>{ 
      if(item == true){
        this.sauceService.deleteSauce(id).subscribe();

        const index = this.listOfSauces.findIndex(i => i.id == id);
        this.listOfSauces.splice(index, 1);
      }

    });
  }

  addSauce(){
    var popup = this.dialog.open(AddSauceComponent,{

      width: '40%',
      height: '325px',

    });
    popup.afterClosed().subscribe(newSauce =>{
    
      this.sauceService.getAllSauces().subscribe(data => {this.listOfSauces = data});

    });

  }

  sauceDetails(sauce: Sauce){
  }

}
