import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

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
constructor(private _LoginService:LoginService, private _router:Router){}
login(){
console.log(this.LoginForm);
this._LoginService.login(this.LoginForm.value).subscribe(
  (data:any)=>{
    alert("Login Sucess");
    // go to dashbord
    this._router.navigateByUrl("/dashboard");
    // storetoken
    sessionStorage.setItem('token',data.token);
  },
  (err:any)=>{
    alert("invalid");
  }
)
}
}
