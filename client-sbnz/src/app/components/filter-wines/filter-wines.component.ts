import { WineSugar } from './../../model/wineSugar';
import { WineColor } from './../../model/wineColor';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Wine } from 'src/app/model/wine';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-filter-wines',
  templateUrl: './filter-wines.component.html',
  styleUrls: ['./filter-wines.component.css']
})
export class FilterWinesComponent implements OnInit {

  constructor(private userServie: UserService,private  fb: FormBuilder) { }

  filterForm!: FormGroup; 

  wineSugars = Object.values(WineSugar);
  wineColors = Object.values(WineColor);
  
  wineList: Wine[] = [];

  ngOnInit(): void {
    this.filterForm = this.fb.group({
      year: [null],
      wineSugar: [null],
      wineColor: [null]
    });

  }

  filterWines(){
    const criteria = this.filterForm.value;
    this.userServie.filterWines(criteria).subscribe(data => { 
      this.wineList = data;
      console.log(this.wineList);
    })
  }

}


