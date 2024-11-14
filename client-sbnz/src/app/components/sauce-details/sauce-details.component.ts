import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef , MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Sauce } from 'src/app/model/sauce';
import { SauceService } from 'src/app/services/sauce.service';
import { SauceComponent } from '../sauce/sauce.component';

@Component({
  selector: 'app-sauce-details',
  templateUrl: './sauce-details.component.html',
  styleUrls: ['./sauce-details.component.css']
})
export class SauceDetailsComponent implements OnInit {

  sauce!: Sauce;
  
  constructor(@Inject(MAT_DIALOG_DATA) private data: any,  private ref: MatDialogRef<SauceComponent>, 
  private sauceService: SauceService) { }

  ngOnInit(): void {
    this.sauce = this.data.sauce;
  }


  updateSauce(){
    this.sauceService.updateSauce(this.sauce).subscribe(data => {console.log(data)})
    this.ref.close();
  }

}
