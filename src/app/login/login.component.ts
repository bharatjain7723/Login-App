import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, NgForm } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../app.component.css']
})
export class LoginComponent implements OnInit {

  private myForm: FormGroup;  

  constructor(public router: Router) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      'email': new FormControl(),
      'password': new FormControl(),
    });     
  }

  validateForm(myForm: NgForm) {
    var x = this.myForm.value.email;
    var y = this.myForm.value.password;
    console.log(x + " and " + y);
    
    if (x === null || y === null) {
        alert("All feilds must be filled out");
    }
    else if ( x=="bharat@gmail.com" && y=="bharatjain"){
      this.router.navigate(['welcome']);      
    }
    else{
        alert("Email or password is incorrect");        
    }
  }
}
