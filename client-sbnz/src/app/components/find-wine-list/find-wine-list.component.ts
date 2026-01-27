import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Answers } from 'src/app/model/answers';
import { Wine } from 'src/app/model/wine';
import { UserService } from 'src/app/services/user.service';
import { WineMoreDetailsComponent } from '../wine-more-details/wine-more-details.component';

@Component({
  selector: 'app-find-wine-list',
  templateUrl: './find-wine-list.component.html',
  styleUrls: ['./find-wine-list.component.css']
})
export class FindWineListComponent implements OnInit {

  answers: any = {};
  answersBack! : Answers
  currentQuestion: any = null;
  selectedKitchen: string = '';
  wineList : Wine[] | null = null;

  

  

  constructor( private userService: UserService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.resetAnswers();
    
  }


  resetAnswers(){

    this.answers = {
      Q1: null,
      Q2: null,
      Q3: null,
      Q3a_obala: null,
      Q3a_jesen_zima: null,
      Q3a_socno: null,
      Q3a_proteini: null,
      Q3a_osvezavajuci_ukusi: null,
      Q3a_dimljeni_ukusi: null,
      Q4_lak: null,
      Q4_alergicni: null,
      Q4_pizza: null,
      Q4a_leto: null,
      Q4a_kremasti_ukusi: null,
      Q5_zac: null,
      Q5_pikantno: null,
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
  moreDetails(wine: Wine){

      var popup = this.dialog.open(WineMoreDetailsComponent,{
  
        width: '40%',
        //height: '400px',
        data:{
          wine: wine
        } 
  
      });

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
      autmnOrWinter: this.answers.Q3a_jesen_zima,
      preferMeat: this.answers.Q3a_proteini,
      juicyDishes: this.answers.Q3a_socno,
      refreshingFlavors: this.answers.Q3a_osvezavajuci_ukusi,
      creamyFlavors: this.answers.Q4a_kremasti_ukusi,
      smokyFlavors: this.answers.Q3a_dimljeni_ukusi,
      lactoseIntolerant: this.answers.Q4_lak,
      summer: this.answers.Q4a_leto,
      foodAllergy: this.answers.Q4_alergicni,
      pizzaWithPineapple: this.answers.Q4_pizza,
      savoryFood: this.answers.Q5_zac,
      onDate: this.answers.Q6_dejt,
      spicyFood : this.answers.Q5_pikantno,
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

    this.userService.wineRanking(this.answersBack).subscribe(wine => {
      this.wineList = wine;
      console.log(this.wineList);
  
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
    if(!answers.Q2){
      return {
        id: "Q2",
        text: "Da li narucujete desert?",
        options: ["Da", "Ne"]
      };
    }
    // ako narucuje desert kraj
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
      if(!answers.Q3a_jesen_zima){
        return {
          id: "Q3a_jesen_zima",
          text: "Da li je jesen ili zima?",
          options: ["Da", "Ne"]
        };

      }

    }
    if(!answers.Q4_alergicni){
      return {
        id: "Q4_alergicni",
        text: "Da li ste alergicni na nesto?",
        options: ["Da", "Ne"]
      };

    }
    if(answers.Q4_alergicni === "Da"){
      if(!answers.Q4_lak){
        return {
          id: "Q4_lak",
          text: "Da li ste intolerantni na laktozu?",
          options: ["Da", "Ne"]
        };

      }
    }
    if(!answers.Q5_zac){
      return {
        id: "Q5_zac",
        text: "Da li volite zacinjeno?",
        options: ["Da", "Ne"]

      };

    }
    if(answers.Q5_zac === "Da"){
      if(!answers.Q6_dejt){
        return {
          id: "Q6_dejt",
          text: "Da li idete na dejt?",
          options: ["Da", "Ne"]
        };

      }

    }
    if(!answers.Q7_caj){
      return {
        id: "Q7_caj",
        text: "Da li preferirate zasladjeni ili nezasladjeni ledeni caj?",
        options: ["Zasladjeni", "Nezasladjeni"]
      };

    }
    ///Gotovooo 
    return {done: true, reason: "all_answers_collected"};


  }

  getAmericanQuestions(answers: any){
    if(!answers.Q2){
      return {
        id: "Q2",
        text: "Da li narucujete desert?",
        options: ["Da", "Ne"]
      };
    }
    // ako narucuje desert KRAJ!
    if(answers.Q2 === "Da"){
      return {done: true, reason: "desert"}
    }
    if(!answers.Q3){
      return {
        id: "Q3",
        text: "Da li trenirate min 3x nedeljno?",
        options: ["Da","Ne"]
      }

    }
    if(answers.Q3 === "Ne"){
      if(!answers.Q3a_socno){
        return{
          id: "Q3a_socno",
          text: "Da li preferirate jela koja su poznata po bogatom ukusu i socnosti ? ",
          options: ["Da", "Ne"]
        }

      }

    }
    if(!answers.Q4_pizza){
      return{
        id: "Q4_pizza",
        text: "Da li volite pizzu sa ananasom?",
        options: ["Da", "Ne"]
      }

    }
    if(!answers.Q5_pikantno){
      return {
        id: "Q5_pikantno",
        text: "Da li preferirate jela sa pikantnim ukusom?",
        options: ["Da","Ne"]
        
      }

    }
    if(!answers.Q6_dejt){
      return {
        id: "Q6_dejt",
        text: "Da li idete na dejt?",
        options: ["Da", "Ne"]
      }

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
  
  getIndianQuestions(answers: any){
    if(!answers.Q2){
      return {
        id: "Q2",
        text: "Da li narucujete desert?",
        options: ["Da", "Ne"]
      };
    }
    // ako narucuje desert KRAJ!
    if(answers.Q2 === "Da"){
      return {done: true, reason: "desert"};
    }
    if(!answers.Q3){
      return {
        id: "Q3",
        text: "Da li birate obroke koji vam pomazu da imate vise enrgije u toku dana?",
        options: ["Da","Ne"]
      };
    } 
    if(answers.Q3 === "Da"){
      if(!answers.Q3a_proteini){
        return {
          id: "Q3a_proteini",
          text: "Da li volite obroke bogate proteinima iz mesa?",
          options: ["Da", "Ne"]
        };

      }

    } 
    if(!answers.Q4_alergicni){
      return {
        id: "Q4_alergicni",
        text: "Da li ste alergicni na neku hranu? ",
        options: ["Da", "Ne"]
      };

    }
    if(answers.Q4_alergicni === "Da"){
      if(!answers.Q4a_kremasti_ukusi){
        return {
          id: "Q4a_kremasti_ukusi",
          text: "Da li volite kremaste ukuse?",
          options: ["Da", "Ne"]
        };

      }

    }
    if(!answers.Q5_zac){
      return {
        id: "Q5_zac",
        text: "Da li volite da vasa jela imaju izrazene ukuse i arome?",
        options: ["Da", "Ne"]

      };
    }
    if(!answers.Q6_dejt){
      return {
        id: "Q6_dejt",
        text: "Da li idete na dejt?",
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

  getChineseQuestions(answers: any){

    if(!answers.Q2){
      return {
        id: "Q2",
        text: "Da li narucujete desert?",
        options: ["Da", "Ne"]
      };
    }
    // ako narucuje desert KRAJ!
    if(answers.Q2 === "Da"){
      return {done: true, reason: "desert"};
    }
    if(!answers.Q3){
      return{
        id: "Q3",
        text: "Da li birate obroke koji vam pomazu da imate vise energije u toku dana?",
        options: ["Da", "Ne"]
      }

    }
    if(answers.Q3 === "Da"){
      if(!answers.Q3a_osvezavajuci_ukusi){
        return {
          id: "Q3a_osvezavajuci_ukusi",
          text: "Da li vise volite osvezavajuce ukuse koji podsecaju na more? ",
          options: ["Da"," Ne"]

        }

      }

    }
    if(!answers.Q4_pizza){
      return{
        id: "Q4_pizza",
        text: "Da li volite pizzu sa ananasom?",
        options: ["Da","Ne"]
      }

    }
    if(!answers.Q5_pikantno){
      return {
        id: "Q5_pikantno",
        text: "Da li preferirate ljutu hranu?",
        options: ["Da", "Ne"]
      }

    }
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

  getMexicanQuestions(answers: any){

    if(!answers.Q2){
      return {
        id: "Q2",
        text: "Da li narucujete desert?",
        options: ["Da", "Ne"]
      };
    }
    // ako narucuje desert KRAJ!
    if(answers.Q2 === "Da"){
      return {done: true, reason: "desert"};
    }

    if(!answers.Q3){
      return{
        id: "Q3",
        text: "Da li trenirate min 3x nedeljno?",
        options: ["Da", "Ne"]

      }

    }
    if(answers.Q3 === "Ne"){
      if(!answers.Q3a_dimljeni_ukusi){
        return{
          id: "Q3a_dimljeni_ukusi",
          text: "Da li preferirate bogate, dimljene ukuse?",
          options:["Da", "Ne"]
        }

      }
    }
    if(!answers.Q4a_kremasti_ukusi){
      return {
        id: "Q4a_kremasti_ukusi",
        text: "Da li preferirate kremaste ukuse?",
        options: ["Da", "Ne"]
      }

    }
    if(answers.Q4a_kremasti_ukusi === "Da"){
      if(!answers.Q4_lak){
        return {
          id: "Q4_lak",
          text: "Da li ste intolerantni na laktozu? ",
          options: ["Da", "Ne"]
        }

      }

    }
    if(!answers.Q5_pikantno){
      return {
        id: "Q5_pikantno",
        text: "Da li preferirate ljutu hranu?",
        options: ["Da", "Ne"]
      }

    }
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


  


  




}
