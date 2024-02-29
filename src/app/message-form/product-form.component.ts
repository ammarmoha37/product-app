import { Component } from '@angular/core';

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

  onSubmit() {
    this.isSubmitted = true;
    this.messages.push({
      'name': this.name,
      'email': this.email,
      'message': this.message,
    })
  }

  deleteMessage(index: number) {
    this.messages.splice(index, 1);
  }
}
