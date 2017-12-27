import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, NgForm } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../app.component.css']
})
export class RegisterComponent implements OnInit {

  private myForm: FormGroup; 

  constructor(public router: Router) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      'name': new FormControl(),      
      'email': new FormControl(),
      'password': new FormControl(),
      'confirmPassword': new FormControl()
    }); 
  }
  

  RegisterationForm(myForm: NgForm){
    var x = this.myForm.value.email;
    var y = this.myForm.value.password;
    var w = this.myForm.value.name;
    var z = this.myForm.value.confirmPassword;
    if (w === null || x === null || y === null || z === null) {
        alert("All feilds must be filled out");
    }
    else if(y!==z){
        alert("Password and Confirm Password don't match");
    }
    else{
        alert("Welcome " + w);
        this.router.navigate(['welcome']);
    }
}

}
