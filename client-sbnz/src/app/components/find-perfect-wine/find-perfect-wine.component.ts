
import { Wine } from './../../model/wine';
import { UserService } from 'src/app/services/user.service';
import { Answers} from './../../model/answers';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-find-perfect-wine',
  templateUrl: './find-perfect-wine.component.html',
  styleUrls: ['./find-perfect-wine.component.css']
})
export class FindPerfectWineComponent implements OnInit {

  answers: any = {};
  answersBack! : Answers
  currentQuestion: any = null;
  selectedKitchen: string = '';
  perfectWine! : Wine;

  
  



  

  constructor( private userService: UserService) { }

  ngOnInit(): void {

    this.resetAnswers();
    
  }


  resetAnswers(){

    this.answers = {
      Q1: null,
      Q2: null,
      Q3: null,
      Q3a_obala: null,
      Q4_lak: null,
      Q4a_leto: null,
      Q5_zac: null,
      Q6_dejt: null,
      Q7_caj: null,
    };
    this.selectedKitchen = '';

    this.currentQuestion = this.getNextQuestion(this.selectedKitchen, this.answers);

  }

  chooseOption(option: string){
    const q = this.currentQuestion.id;
    this.answers[q] = option;

    if(q === "Q1"){
      this.selectedKitchen = option;
    }
    this.currentQuestion = this.getNextQuestion(this.selectedKitchen,this.answers);

  }

  getNextQuestion(kitchen: string, answers:any){
    if(!answers.Q1){
      return{
        id: "Q1",
        text: "Izaberite vrstu nacionalne kuhinje?",
        options:["Italijanska","Francuska","Americka","Indijska", "Kineska", "Meksicka"]

      };
    }
    if(kitchen === "Italijanska"){
      return this.getItalianQuestions(answers);

    }
    if(kitchen === "Francuska"){
      return this.getFranceQuestions(answers);

    }
    if(kitchen === "Americka"){
      return this.getAmericanQuestions(answers);
    }
    if(kitchen === "Indijska"){
      return this.getIndianQuestions(answers);

    }
    if(kitchen === "Kineska"){
      return this.getChineseQuestions(answers);

    }
    if(kitchen === "Meksicka"){
      return this.getMexicanQuestions(answers);

    }
    return null;

  }

  

  sendToBackend(){

   this.answersBack  = {

      ethnicity: this.answers.Q1,
      healthConscious: this.answers.Q3,
      onTheCoast: this.answers.Q3a_obala,
      autmnOrWinter: null,
      preferMeat: null,
      juicyDishes: null,
      refreshingFlavors: null,
      creamyFlavors: null,
      smokyFlavors: null,
      lactoseIntolerant: this.answers.Q4_lak,
      summer: this.answers.Q4a_leto,
      foodAllergy: null,
      pizzaWithPineapple: null,
      savoryFood: this.answers.Q5_zac,
      onDate: this.answers.Q6_dejt,
      spicyFood : null,
      sweetenedIcedTea: this.answers.Q7_caj,
      haveDessert: this.answers.Q2
  
    }  
    if(this.answersBack.sweetenedIcedTea === "Zasladjeni"){
        this.answersBack.sweetenedIcedTea = "Da";
    }
    if( this.answersBack.sweetenedIcedTea === "Nezasladjeni"){
      this.answersBack.sweetenedIcedTea = "Ne";
    }
    

    console.log(this.answersBack);

    this.userService.sendAnswers(this.answersBack).subscribe(data => {
      this.perfectWine = data;
      console.log(this.perfectWine);

    });
    
  }


  getItalianQuestions(answers: any){
    

    if(!answers.Q2){
      return {
        id: "Q2",
        text: "Da li narucujete desert?",
        options: ["Da", "Ne"]
      };
    }
    if(answers.Q2 === "Da"){
      return {done: true, reason: "desert"}
    }

    
    if(!answers.Q3){
      
        return {
          id: "Q3",
          text: "Da li trenirate min 3x nedeljno?",
          options: ["Da", "Ne"]
        };

      
    }

    if(answers.Q3 === "Ne"){
        // ide laktoza
        if(!answers.Q4_lak){

          return {
            id: "Q4_lak",
            text: "Da li ste intolerantni na laktozu ?",
            options: ["Da", "Ne"]
  
          };
        } 
        // Ako je laktoza Da -> odmah idu zacini
        if(answers.Q4_lak === "Da"){
          if(!answers.Q5_zac){
            return{
              id:"Q5_zac",
              text: "Da li volite zacinjenu hranu?",
              options: ["Da", "Ne"]
            }; 

          }

        }
        if(answers.Q4_lak === "Ne"){
          if(!answers.Q4a_leto){
            return { 
              id: "Q4a_leto",
              text: "Da li je leto ?",
              options: ["Da", "Ne"]
            };

          }
        } 
        
        if(!answers.Q5_zac){

            return {
              id: "Q5_zac",
              text: "Da li volite zacinjenu hranu?",
              options: ["Da", "Ne"]
            };

        }

    }
    //Ako DA trenira -> ide Q3a (obala)
    if(answers.Q3 === "Da"){
      if(!answers.Q3a_obala){
          return{
            id: "Q3a_obala",
            text: "Da li je restoran na obali ?",
            options: ["Da", "Ne"]
          };

      }
      //posle pitanja da li je na obali ide za laktozu
      if(!answers.Q4_lak){
          return {
            id: "Q4_lak",
            text: "Da li ste intolerantni na laktozu?",
            options: ["Da", "Ne"]
          };

      }
      //ako je laktoza DA -> idu Zacini
      if(answers.Q4_lak === "Da"){
        if(!answers.Q5_zac){
          return{
            id: "Q5_zac",
            text: "Da li volite zacinjenu hranu ?",
            options: ["Da", "Ne"]
          };

        }
      }
      if(answers.Q4_lak === "Ne"){
        if(!answers.Q4a_leto){
          return {
            id: "Q4a_leto",
            text: "Da li je leto?",
            options: ["Da", "Ne"]
          };
      }

      }
      
      if(!answers.Q5_zac){
          return {
            id: "Q5_zac",
            text: "Da li volite zacinjenu hranu?",
            options: ["Da", "Ne"]
          };

      }

    }
    // Dejt
    if(!answers.Q6_dejt){
        return {
          id: "Q6_dejt",
          text: "Da li imate dejt?",
          options: ["Da", "Ne"]
        };

    }
    // izbor ledenog caja
    if(!answers.Q7_caj){
        return {
          id: "Q7_caj",
          text: "Da li preferirate zasladjeni ili nezasladjeni ledeni caj? ",
          options: ["Zasladjeni", "Nezasladjeni"]
        };

    }

    ///Gotovooo 
    return {done: true, reason: "all_answers_collected"};
  

  }

  getFranceQuestions(answers: any){

  }

  getAmericanQuestions(answrs: any){

  }
  
  getIndianQuestions(answers: any){

  }

  getChineseQuestions(answers: any){

  }

  getMexicanQuestions(answers: any){

  }


  


  



}
