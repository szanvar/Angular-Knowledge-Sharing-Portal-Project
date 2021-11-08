import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm | any;
  name: any;
  password: any;
  counter: number = 0;

  constructor(private fb : FormBuilder, private router: Router) { }

  ngOnInit(): void {
   
  }
 
  submit(form: NgForm) :any
  {
    if(this.name == "admin" && this.password == "admin") 
    {
      this.router.navigate(['/home']);
    }
    
    else
    {
      this.counter++;
      if(this.counter == 3){
        this.router.navigate(['/page']);

      }
      
    }
    this.loginForm.reset();

  }

}
