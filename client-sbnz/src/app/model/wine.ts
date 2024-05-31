import { Meat } from './meat';

export interface Wine{
    id?: number;
    name: string;
    year: number;
    wineColor: string;
    wineSugar: string;
    meatList: Meat[];
    sauceList: any[];
    ingredientList: any[];
}