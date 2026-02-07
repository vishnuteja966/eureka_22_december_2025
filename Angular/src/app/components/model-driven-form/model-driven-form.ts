import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-driven-form',
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './model-driven-form.html',
  styleUrl: './model-driven-form.css',
})
export class ModelDrivenForm {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    // this.registerForm = new FormGroup({
    //   firstName: new FormControl('Virat', [Validators.required, Validators.minLength(5)]),
    //   lastName: new FormControl('Kohli', [Validators.required]),
    //   email: new FormControl('', [Validators.required]),
    //   address: new FormGroup({
    //     city: new FormControl(),
    //     state: new FormControl(),
    //     pincode: new FormControl(),
    //   })
    // }, { updateOn: "blur" })

    this.registerForm = this.fb.group({
      firstName: [`Virat`, [Validators.required, Validators.minLength(5)]],
      lastName: [`Virat`, [Validators.required]],
      email: [`@gmail.com`, [Validators.required]],
      address: this.fb.group({
        city:[],
        state: [],
        pincode: []
      })

    })
  }

  submitMyForm() {
    console.log(this.registerForm)
  }
  updateFormData(){
    //this.registerForm.patchValue({firstName: `Vishnu`});
    this.registerForm.setValue({firstName: `Vishnu`});

  }
}
