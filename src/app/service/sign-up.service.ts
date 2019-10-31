import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor() { }

  save(formObj: NgForm)  {
    console.log('save reached!');
  }

}
