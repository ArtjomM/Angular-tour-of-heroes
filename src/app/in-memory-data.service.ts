import { Injectable } from '@angular/core';
import {Hero} from './hero';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(){
    const heroes = [
      { id: 11, name: 'Mr.Nice', abilities: [{ability: 'Teleportation', abilityPower: 3},{ability: 'Survival', abilityPower: 6}]},
      { id: 12, name: 'Narco', abilities: [{ability: 'Stone Skin', abilityPower: 5},{ability: 'Knowledge', abilityPower: 2}]},
      { id: 13, name: 'Bombasto', abilities: [{ability: 'Survival', abilityPower: 7},{ability: 'Stone Skin', abilityPower: 1}]},
      { id: 14, name: 'Celeritas', abilities: [{ability: 'Diplomacy', abilityPower: 5},{ability: 'Craft Weapon', abilityPower: 4}]},
      { id: 15, name: 'Magneta', abilities: [{ability: 'Intimmidate', abilityPower: 3},{ability: 'Escape Artist', abilityPower: 7}]},
      { id: 16, name: 'RubberMan', abilities: [{ability: 'Disable Device', abilityPower: 4},{ability: 'Open Lock', abilityPower: 3}]},
      { id: 17, name: 'Dynama', abilities: [{ability: 'Open Lock', abilityPower: 10}]},
      { id: 18, name: 'Dr IQ', abilities: [{ability: 'Knowledge', abilityPower: 7},{ability: 'Survival', abilityPower: 6}]},
      { id: 19, name: 'Magma', abilities: [{ability: 'Escape Artist', abilityPower: 5}]},
      { id: 20, name: 'Tornado', abilities: [{ability: 'Craft Weapon', abilityPower: 10},{ability: 'Escape Artist', abilityPower: 8}]}
    ];
    return {heroes};
  }

  getId(heroes: Hero[]): number{
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
