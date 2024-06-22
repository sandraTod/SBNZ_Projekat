import { SauceService } from 'src/app/services/sauce.service';
import { Component, Inject, OnInit } from '@angular/core';
import { Sauce } from 'src/app/model/sauce';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SauceComponent } from '../sauce/sauce.component';

@Component({
  selector: 'app-add-sauce',
  templateUrl: './add-sauce.component.html',
  styleUrls: ['./add-sauce.component.css']
})
export class AddSauceComponent implements OnInit {


  newSauce: Sauce = {

    name: '',
    nationalCuisine: "ITALIJANSKA"

}
  constructor(@Inject(MAT_DIALOG_DATA) private data: any,  private ref: MatDialogRef<SauceComponent>,
              private sauceService: SauceService) { }

  ngOnInit(): void {
  }

  addSauce(){
    
    this.sauceService.addSauce(this.newSauce).subscribe();
    this.ref.close(this.newSauce);

  }

}
