import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Spice } from 'src/app/model/spice';
import { SpiceService } from 'src/app/services/spice.service';
import { SpiceComponent } from '../spice/spice.component';

@Component({
  selector: 'app-spice-details',
  templateUrl: './spice-details.component.html',
  styleUrls: ['./spice-details.component.css']
})
export class SpiceDetailsComponent implements OnInit {

  spice!: Spice;

  constructor(@Inject(MAT_DIALOG_DATA) private data: any,  private ref: MatDialogRef<SpiceComponent>, 
  private spiceService: SpiceService) { }

  ngOnInit(): void {

    this.spice = this.data.spice;
  }

  updateSpice(){
    this.spiceService.updateSpice(this.spice).subscribe(data => console.log(data));
    this.ref.close();
  }

}
