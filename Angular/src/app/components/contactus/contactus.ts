import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './contactus.html',
  styleUrl: './contactus.css',
})
export class Contactus {
  isSubmitted = false;
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(5)]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      address: this.fb.group({
        city: [],
        state: [],
        pincode: []
      })
    });

  }
  submitMyForm() {
    console.log(this.registerForm);
    this.isSubmitted = true;
  }
  updateFormData() {
    this.registerForm.setValue({ firstName: 'sanjay' });
  }
}
