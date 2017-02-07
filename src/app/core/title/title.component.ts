import { Component, OnInit, Input } from '@angular/core';

import { UserService } from './../user.service';

@Component({
  selector: 'mod-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  @Input() subtitle = ''
  title = "Angular Modules"
  user: string = ''

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.user = this.userService.userName
  }

}
