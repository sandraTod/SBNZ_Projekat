import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Meat } from 'src/app/model/meat';
import { MeatService } from 'src/app/services/meat.service';
import { MeatComponent } from '../meat/meat.component';

@Component({
  selector: 'app-meat-details',
  templateUrl: './meat-details.component.html',
  styleUrls: ['./meat-details.component.css']
})
export class MeatDetailsComponent implements OnInit {

  meat!: Meat;  

  constructor(@Inject(MAT_DIALOG_DATA) private data: any,  private ref: MatDialogRef<MeatComponent>, 
  private meatService: MeatService) { }

  ngOnInit(): void {
    this.meat = this.data.meat;
  }

  updateMeat(){
    this.meatService.updateMeat(this.meat).subscribe(data => {console.log(data)})
    this.ref.close();
  }

}
