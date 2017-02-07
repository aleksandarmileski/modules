import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Hero, HeroService } from './../../hero.service';

@Component({
  selector: 'mod-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService
  ) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.params['id'], 10)
    this.heroService.getHero(id)
      .then(hero => this.hero = hero)
  }

}
