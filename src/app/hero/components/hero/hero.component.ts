import { Component, OnInit } from '@angular/core';

import { UserService } from './../../../core/user.service';
import { HeroService } from './../../hero.service';

@Component({
  selector: 'mod-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  providers: [HeroService]
})
export class HeroComponent implements OnInit {

  userName = ''

  constructor(
    private userService: UserService
  ) {
    this.userName = this.userService.userName
  }

  ngOnInit() {
  }

}
