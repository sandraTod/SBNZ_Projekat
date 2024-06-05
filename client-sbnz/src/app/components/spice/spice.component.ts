import { MatDialog } from '@angular/material/dialog';
import { SpiceService } from './../../services/spice.service';
import { Component, OnInit } from '@angular/core';
import { Spice } from 'src/app/model/spice';
import { DeleteEntityComponent } from '../delete-entity/delete-entity.component';

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

  }

  addSpice(){

  }

}
