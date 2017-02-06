import { Component, OnInit } from '@angular/core';

import { Contact } from './../../components/contact';

import { UserService } from './../../services/user.service';
import { ContactService } from './../../services/contact.service';

@Component({
  selector: 'mod-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  msg: string = 'Loading Contacts...'
  userName: string = ''

  contact: Contact
  contacts: Contact[]

  constructor(
    private userService: UserService,
    private contactService: ContactService
  ) { }

  ngOnInit() {
    this.userName = this.userService.userName

    this.contactService.getContacts()
      .then(contacts => {
        this.msg = ''
        this.contacts = contacts
        this.contact = contacts[0]
      })
  }

  next() {
    let ix = 1 + this.contacts.indexOf(this.contact)
    if (ix >= this.contacts.length) { ix = 0 }
    this.contact = this.contacts[ix]
  }

  onSubmit() {
    this.displayMessage('Saved: ' + this.contact.name)
  }

  newContact() {
    this.displayMessage('New Contact')
    this.contact = { id: 42, name: '' }
    this.contacts.push(this.contact)
  }

  displayMessage(msg: string) {
    this.msg = msg
    setTimeout(() => {
      this.msg = ''
    }, 1500)
  }

}
