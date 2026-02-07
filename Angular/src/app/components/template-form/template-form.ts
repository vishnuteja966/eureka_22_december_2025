import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule,
    CommonModule
  ],
  templateUrl: './template-form.html',
  styleUrl: './template-form.css',
})
export class TemplateForm {
  user = {
    "firstName": "Virat",
    "lastName": "",
    "email": "Virat@gmail.com",
    "address": {
      "city": "",
      "state": "",
      "pincode": "123456"
    }
  }

  submitMyForm(formData: any) {
    console.log(formData)
  }

}
