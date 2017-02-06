import { Injectable } from '@angular/core';

import { Contact } from './../components/contact/contact';

const CONTACTS: Contact[] = [
  new Contact(21, 'Sam Spade'),
  new Contact(22, 'Nick Danger'),
  new Contact(23, 'Nancy Drew')
];

const FETCH_LATENCY = 500;

@Injectable()
export class ContactService {

  constructor() { }

  getContacts() {
    return new Promise<Contact[]>(resolve => {
      setTimeout(() => { resolve(CONTACTS) }, FETCH_LATENCY)
    })
  }

  getContact(id: number | string) {
    return this.getContacts()
      .then(contacts => contacts.find(contact => contact.id === +id))
  }

}
