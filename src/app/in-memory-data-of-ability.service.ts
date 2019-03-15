import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Ability } from './ability';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataOfAbilityService implements InMemoryDbService {
  createDb() {
    const abilities = [
  { ability: 'Teleportation', abilitypower: 3},
  { ability: 'Stone skin', abilitypower: 5},
  { ability: 'Magic', abilitypower: 6},
  { ability: 'Teleportation', abilitypower: 7},
  { ability: 'Teleportation', abilitypower: 4},
  { ability: 'Magic', abilitypower: 9},
  { ability: 'Invisible', abilitypower: 1},
  { ability: 'Silent assassin', abilitypower: 7},
  { ability: 'Teleportation', abilitypower: 2},
  { ability: 'Magic', abilitypower: 10},
    ];
    return {abilities};
  }
}
