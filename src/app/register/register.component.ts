import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../app.component.css']
})
export class RegisterComponent implements OnInit {

  private myForm: FormGroup;    

  constructor() { }

  ngOnInit() {
    this.myForm = new FormGroup({
      'name': new FormControl(),      
      'email': new FormControl(),
      'password': new FormControl(),
      'confirmPassword': new FormControl()
    }); 
  }

  RegisterationForm(myForm: NgForm){
    // var w = document.forms["RegisterForm"]["username"].value;
    // var x = document.forms["RegisterForm"]["email"].value;
    // var y = document.forms["RegisterForm"]["password"].value;
    // var z = document.forms["RegisterForm"]["confirmPassword"].value;
    var x = myForm.value.email.value;
    var y = myForm.value.password.value;
    var w = myForm.value.name.value;
    var z = myForm.value.confirmPassword.value;
    if (w == "" || x == "" || y == "" || z =="") {
        alert("All feilds must be filled out");
        return false;
    }
    else{
        alert("Welcome " + w);
        return true;
    }
}

}
