import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  messages: Array<any> = [];
  constructor() {
    this.init();
  }

  init() {
    this.insert({
      name: 'Ali',
      email: 'ali@gmail.com',
      message: 'Hello there, I am Ali'
    });
    this.insert({
      name: 'John',
      email: 'john@gmail.com',
      message: 'Hello there, I am John'
    });
    this.insert({
      name: 'Emily',
      email: 'emily@gmail.com',
      message: 'Hello there, I am Emily'
    });
  }

  insert(message: {name: string, email: string, message: string}) {
    this.messages.push(message);
  }

  getAllMessages() {
    return this.messages;
  }

  deleteMessage(index: number) {
    this.messages.splice(index, 1);
  }
}
