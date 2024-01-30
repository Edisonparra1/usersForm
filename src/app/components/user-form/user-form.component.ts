import { Component } from '@angular/core';
import { User } from '../../models/User';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent {
  userForm!: FormGroup;
  user: any = {};

  constructor(private fb: FormBuilder) {
    this.initForm();
  }

  private initForm () {
    this.userForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]],
      phone: ['', [Validators.required]],
      address: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log('Formulario válido', this.userForm.value);
    } else {
      console.log('Formulario no válido');
  }
 }
}
