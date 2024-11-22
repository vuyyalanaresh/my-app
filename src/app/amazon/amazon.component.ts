import { Component } from '@angular/core';
import { AmazonService } from '../amazon.service';

@Component({
  selector: 'app-amazon',
  templateUrl: './amazon.component.html',
  styleUrls: ['./amazon.component.css']
})
export class AmazonComponent {
  Amazons:any = [];
  constructor(private _AmazonService:AmazonService){
    _AmazonService.getAmazon().subscribe(
      (data:any)=>{
        this.Amazons = data;
      },
      (err:any)=>{
        alert("internal server error")
      }
    )
  }

}
