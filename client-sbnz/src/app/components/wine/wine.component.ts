import { WineService } from './../../services/wine.service';
import { Component, OnInit } from '@angular/core';
import { Wine } from 'src/app/model/wine';

@Component({
  selector: 'app-wine',
  templateUrl: './wine.component.html',
  styleUrls: ['./wine.component.css']
})
export class WineComponent implements OnInit {

   listOfWines!: Wine[];

  constructor( private wineService: WineService) { }

  ngOnInit(): void {

    this.wineService.getAllWine().subscribe(data=>{ this.listOfWines = data; console.log(data)});

    
  }



}
