import { Component } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  Accounts:any = [];
  term:string  = "";

  constructor(private _AccountService:AccountService){
    _AccountService.getAccounts().subscribe(
      (data:any)=>{
        this.Accounts = data;
      },
      (err:any)=>{
        alert("internal server error")
      }
    )
  }
  filter(){
    this._AccountService.getFilteredAccounts(this.term).subscribe(
      (data:any)=>{
        this.Accounts = data;
      },
      (err:any)=>{
        alert("erreor")
      }
    )
  }
  column:string = "";
  order:string = "";
  sort(){
    this._AccountService.getSortedAccounts(this.column,this.order).subscribe(
      (data:any)=>{
        this.Accounts = data;
      },
      (err:any)=>{
        alert("server error")
      }
    )
  }
  delete(id:string){
    this._AccountService.deleteAccounts(id).subscribe(
      (data:any)=>{
        alert("deleted success!!");
        location.reload();
      },
      (err:any)=>{
        alert("server error")
      }
    )
  }
  limit:number = 0;
  page:number = 0;
  pagination(){
    this._AccountService.getpagedAccounts(this.limit, this.page).subscribe(
      (data:any)=>{
        this.Accounts = data;
      },
      (err:any)=>{
        alert("server error")
      }
    )
  }

}
