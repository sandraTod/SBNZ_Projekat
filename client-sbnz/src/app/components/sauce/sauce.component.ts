import { Component, OnInit } from '@angular/core';
import { Sauce } from 'src/app/model/sauce';
import { SauceService } from 'src/app/services/sauce.service';

@Component({
  selector: 'app-sauce',
  templateUrl: './sauce.component.html',
  styleUrls: ['./sauce.component.css']
})
export class SauceComponent implements OnInit {

  listOfSauce!: Sauce[];

  constructor(private sauceService: SauceService) { }

  ngOnInit(): void {
    this.sauceService.getAllSauce().subscribe(data => {this.listOfSauce = data});
  }

  deletePopup(id: any){}

  addSauce(){}

}
