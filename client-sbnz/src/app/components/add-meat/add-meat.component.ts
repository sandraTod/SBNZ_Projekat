import { MeatService } from 'src/app/services/meat.service';
import { MeatComponent } from './../meat/meat.component';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Meat } from 'src/app/model/meat';

@Component({
  selector: 'app-add-meat',
  templateUrl: './add-meat.component.html',
  styleUrls: ['./add-meat.component.css']
})
export class AddMeatComponent implements OnInit {

  newMeat: Meat = {

      name: '',
      nationalCuisine: "ITALIJANSKA"

  }

  constructor(@Inject(MAT_DIALOG_DATA) private data: any,  private ref: MatDialogRef<MeatComponent>, private meatService: MeatService) { }

  ngOnInit(): void {
  }

  addMeat(){
    
    this.meatService.addMeat(this.newMeat).subscribe();
    this.ref.close(this.newMeat);

  }

}
