import { Component, OnInit } from '@angular/core';
import { ControlContainer, NgForm, ValidatorFn, AsyncValidatorFn } from '@angular/forms';
import { RegnService } from '../regn.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(
    
    private regnSvc: RegnService) { }

  providers: [ ControlContainer, NgForm, ValidatorFn, AsyncValidatorFn]

  ngOnInit() { }

  addMyRegn(form: NgForm) {
    console.log('form: ', form.value);
    this.regnSvc
      .addRegn(form.value)
      .subscribe((result) =>{
        console.log(result);
      });
    form.resetForm();
  }
  
  checkEmailFromUS(value) {
    return false;
  }
  
  checkPasswordFromUS(value) {
    return false;
  }

  checkNumberFromUS(value) {
    return false;
  }
}
