import { Component } from '@angular/core';
import { SignUpService} from './service/sign-up.service';
import {NgForm} from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ShowSignUp';
  firstName: string;
  lastName: string;
  email: string;

  constructor(private signUpService: SignUpService) { 
    this.signUpService = signUpService;
  }

  onSubmit(form: NgForm)  {
    console.log("got here!");
    console.log(form.value);  // { first: '', last: '' }
    // console.log(form.valid);  // false
    this.signUpService.save(form);
  }    
}
