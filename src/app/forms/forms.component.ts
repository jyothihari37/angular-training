import { Component, OnInit, } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      // return if another validator has already found an error on the matchingControl
      return;
    }

    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  }
}
export function emailPatternCheck() {
  return (formGroup: FormGroup) => {
    const email = formGroup.controls['email'];
    if (email.errors && email.errors.emailPatternCheck) {
      // return if another validator has already found an error on the email
      return;
    }
    let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // set error on email if validation fails
    if (!(email.value.match(pattern))) {
      email.setErrors({ emailPatternCheck: true });
    } else {
      email.setErrors(null);
    }
  }
}

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  registerForm: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],

      lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],

      email: ['', [Validators.required, Validators.email]],

      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    },
      {
        validator: [MustMatch('password', 'confirmPassword'), emailPatternCheck()]
      }
    );
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
    console.log(this.registerForm.value)

  }
}