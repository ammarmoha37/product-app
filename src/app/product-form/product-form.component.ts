import { Component } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent {
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
}
