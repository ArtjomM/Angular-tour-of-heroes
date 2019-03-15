import { Component, OnInit } from '@angular/core';
import { Ability } from '../ability';
import { ABILITIES } from '../mock-abilities';

@Component({
  selector: 'app-ablilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.css']
})
export class AbilitiesComponent implements OnInit {
  
  abilities = ABILITIES;
  selectedAbility: Ability
 
  constructor() { }
 
  ngOnInit() {
  }
 
  onSelect(ability: Ability): void {
    this.selectedAbility = ability;
  }
}
