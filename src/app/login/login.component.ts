import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../app.component.css']
})
export class LoginComponent implements OnInit {

  private myForm: FormGroup;  

  constructor() { }

  ngOnInit() {
    this.myForm = new FormGroup({
      'email': new FormControl(),
      'password': new FormControl(),
    });     
  }

  validateForm(myForm: NgForm) {
    // var x = document.forms["loginForm"]["email"].value;
    // var y = document.forms["loginForm"]["password"].value;
    var x = myForm.value.email.value;
    var y = myForm.value.password.value;
    if (x == "" || y == "") {
        alert("All feilds must be filled out");
        return false;
    }
    if ( x=="bharat@gmail.com" && y=="bharatjain")
        return true;
    else
        alert("Email or password is incorrect");
        return false;    
  }

}
