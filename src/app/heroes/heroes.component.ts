import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  heroes = HEROES;
  sum: number;
  
  constructor(private heroService: HeroService){ 
    let numbers = [10, 20, 30, 40] // sums to 100
    this.sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      this.sum += numbers[i]
  }
  }
  
  ngOnInit() {
    
    this.getHeroes();
  }
    getHeroes(): void{
      this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
    }

    add(name: string): void {
      name = name.trim();
      if (!name) {return;}
      this.heroService.addHero({name} as Hero)
        .subscribe(hero => {
          this.heroes.push(hero);
        });
    }

    delete(hero: Hero): void {
      this.heroes = this.heroes.filter(h => h !== hero);
      this.heroService.deleteHero(hero).subscribe();
    }
    
    
  
  
}