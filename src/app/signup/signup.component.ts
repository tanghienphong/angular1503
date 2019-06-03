import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  formSignup: FormGroup;

  constructor() {
    this.formSignup = new FormGroup({
      email: new FormControl('',
        [
          Validators.required,
          // Validators.email,
          isGmail
        ]
      ),
      fullname: new FormControl('',
        Validators.minLength(6)
      ),
      phone: new FormControl('',
        // Validators.pattern(/^[0-9]+$/)
      ),
      fullAddress: new FormGroup({
        address: new FormControl(''),
        province: new FormControl(''),
      }),
      password: new FormControl(''),
      passwordConfirmation: new FormControl('')
    });
  }

  ngOnInit() {
  }
  getFormData() {
    const data = this.formSignup.value;
    console.log(data);
    // const email = this.formSignup.get('email').value;
    // console.log(email);
  }
  validatorInput(inputName: string): boolean {
    const input = this.formSignup.get(inputName);
    if (input.invalid && input.touched) {
      return false;
    }
    return true;
  }
  passwordMustMatch(): boolean {
    const password = this.formSignup.get('password');
    const rePassword = this.formSignup.get('passwordConfirmation');
    if (password.valid && rePassword.touched && password.value !== rePassword.value) {
      return false;
    }
    return true;
  }
}

function isGmail(control: AbstractControl): ValidationErrors | null {
  if ((control.value as string).trim().endsWith('@gmail.com')) {
    return null; // valid
  }
  return {error: 'Email invalid'};

}
