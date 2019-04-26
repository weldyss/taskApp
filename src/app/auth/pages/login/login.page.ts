import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  authForm: FormGroup;
  configs = {
    isSignIn: true,
    action: 'login',
    actionChange: 'Create account'
  };

  private nameControl = new FormControl('', [Validators.required, Validators.minLength(3)]);

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm(): void {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get email(): FormControl {
    return this.authForm.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.authForm.get('email') as FormControl;
  }

  get name(): FormControl {
    return this.authForm.get('name') as FormControl;
  }

  changeAuthAction(): void {
    this.configs.isSignIn = !this.configs.isSignIn;
    const {isSignIn} = this.configs;
    this.configs.action = isSignIn ? 'Login' : 'Sign up';
    this.configs.actionChange = isSignIn ? 'Create account' : 'I already have an account';
    !isSignIn 
      ? this.authForm.addControl('name', this.nameControl) 
      : this.authForm.removeControl('name')
  }

  onSubmit(): void {
    console.log('Authform', this.authForm.value);
  }

}
