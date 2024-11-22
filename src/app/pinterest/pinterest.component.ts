import { Component } from '@angular/core';
import { PinterestService } from '../pinterest.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-pinterest',
  templateUrl: './pinterest.component.html',
  styleUrls: ['./pinterest.component.css']
})
export class PinterestComponent {
  pinterests:any = [];
  constructor(private _pinterestService:PinterestService){
    _pinterestService.getpinterest().subscribe(
      (data:any)=>{
        this.pinterests =data;
      },
      (err:any)=>{
        alert("server getting erroe")
      }
    )
  }


}
