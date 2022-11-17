import { Component, OnInit } from '@angular/core';
import { IHero } from './hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectedHero?: IHero;

  constructor() {}

  onSelect(hero: IHero): void {
    this.selectedHero = hero;
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
