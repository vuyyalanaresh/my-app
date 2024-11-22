import { Component } from '@angular/core';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent {
  mails:any = [];
  constructor(private  _Mailservice:MailService){
    _Mailservice.getmail().subscribe(
      (data:any)=>{
        this.mails = data;
      },
      (err:any)=>{
        alert("serverbusy")
      }
    )
  }

}
