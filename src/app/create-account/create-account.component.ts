import { Component } from '@angular/core';
import { AccountService } from '../account.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
  constructor(private _AccounService:AccountService){}
  public accountForm:FormGroup = new FormGroup(
    {
      account_name:new FormControl(),
      available_balance:new FormControl(),
      account_number:new FormControl(),
      city:new FormControl(),
      profie_picture:new FormControl(),
    },
  );
  submit(){
    console.log(this.accountForm);
    this._AccounService.createAccounts(this.accountForm.value).subscribe(

    
    (data:any)=>{
      alert("succesfullyCreated");
    },
    (data:any)=>{
      alert("serverdown")
    }
  )
  }


}
