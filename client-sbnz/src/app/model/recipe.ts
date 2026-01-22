import { Spice } from './spice';
import { Sauce } from './sauce';
import { Meat } from './meat';
export interface Recipe {
    id?: number;
    name: string;
    meat: Meat;
    sauce:Sauce;
    spices: Spice[];
    description: string;
    score: number; 
}