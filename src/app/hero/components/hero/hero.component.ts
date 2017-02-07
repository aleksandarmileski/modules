import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';

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
