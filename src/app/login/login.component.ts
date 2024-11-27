import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
public LoginForm:FormGroup = new FormGroup({
  email:new FormControl(),
  password:new FormControl()

})
constructor(private _LoginService:LoginService){}
login(){
console.log(this.LoginForm);
this._LoginService.login(this.LoginForm.value).subscribe(
  (data:any)=>{
    alert("Login Sucess");
  },
  (err:any)=>{
    alert("invalid");
  }
)
}
}
