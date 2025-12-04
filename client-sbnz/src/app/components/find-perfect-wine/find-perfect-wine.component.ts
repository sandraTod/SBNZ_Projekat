
import { Wine } from './../../model/wine';
import { UserService } from 'src/app/services/user.service';
import { Answers} from './../../model/answers';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WineDetailsComponent } from '../wine-details/wine-details.component';

@Component({
  selector: 'app-find-perfect-wine',
  templateUrl: './find-perfect-wine.component.html',
  styleUrls: ['./find-perfect-wine.component.css']
})
export class FindPerfectWineComponent implements OnInit {

  result: Wine = {
    id:  0,
    name: '',
    year: 0,
    wineColor: '',
    wineSugar: '',
    meatList: [],
    sauceList: [],
    spiceList: [],

  }
  

  answersForm = this.fb.group({

    ethnicity: ['unknown', Validators.required],
    healthConscious: ['unknown', Validators.required],
    onTheCoast: ['unknown'],
    autmnOrWinter: ['unknown'],
    preferMeat: ['unknown'],
    juicyDishes: ['unknown'],
    refreshingFlavors: ['unknown'],
    creamyFlavors: ['unknown'],
    smokyFlavors: ['unknown'],
    lactoseIntolerant: ['unknown'],
    summer: ['unknown'],
    foodAllergy: ['unknown'],
    pizzaWithPineapple: ['unknown'],
    savoryFood: ['unknown'],
    onDate: ['unknown'],
    spicyFood : ['unknown'],
    sweetenedIcedTea: ['unknown'],
    haveDessert: ['unknown']

  });

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
  }

  submit(){

    const answers = this.answersForm.value;
    console.log("PREDATO: ", answers);


  }

}
