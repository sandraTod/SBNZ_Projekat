import { SpiceService } from 'src/app/services/spice.service';
import { Component, Inject, OnInit } from '@angular/core';
import { Spice } from 'src/app/model/spice';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SpiceComponent } from '../spice/spice.component';

@Component({
  selector: 'app-add-spice',
  templateUrl: './add-spice.component.html',
  styleUrls: ['./add-spice.component.css']
})
export class AddSpiceComponent implements OnInit {

  newSpice: Spice = {
    name: '',
    nationalCuisine: "ITALIAN"
  }
  constructor(@Inject(MAT_DIALOG_DATA) private data: any,  private ref: MatDialogRef<SpiceComponent>,
              private spiceService: SpiceService) { }

  ngOnInit(): void {
  }

  addSpice(){
    
    this.spiceService.addSpice(this.newSpice).subscribe();
    this.ref.close(this.newSpice);

  }

}
