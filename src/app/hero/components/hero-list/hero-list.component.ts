import { Hero, HeroService } from './../../hero.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mod-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  heroes: Promise<Hero[]>

  constructor(
    private heroService: HeroService
  ) { }

  ngOnInit() {
    this.heroes = this.heroService.getHeroes()
  }

}
