import { Component } from '@angular/core';
import { MessagesService } from '../services/messages.service';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrl: './message-form.component.scss'
})
export class MessageFormComponent {
  name: string;
  email: string;
  message: string;
  isSubmitted: boolean = false;
  messages: {}[] = [];

  constructor(private messageService: MessagesService) {
    this.messages = this.messageService.getAllMessages();
    this.isSubmitted = this.messages.length > 0;
  }

  onSubmit() {
    this.isSubmitted = true;
    this.messageService.insert({
      'name': this.name,
      'email': this.email,
      'message': this.message,
    })
  }

  deleteMessage(index: number) {
    this.messageService.deleteMessage(index);
  }
}
