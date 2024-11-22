import { Component } from '@angular/core';
import { StudentCardService } from '../student-card.service';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css']
})
export class StudentCardComponent {
  studentcards:any =[];
  term:string = "";
  constructor(private _studentcards:StudentCardService){
    _studentcards.getstudentcards().subscribe(
      (data:any)=>{
        this.studentcards = data;
      },
      (err:any)=>{
        alert("server down");
      }
    )
  }
  
  filter(){
    this._studentcards.getFilteredstudentcards(this.term).subscribe(
      (data:any)=>{
        this.studentcards = data;
      },
      (data:any)=>{
        alert("server Down");
      }
    )
  }
  column:string = "";
  order:string = "";
  sort(){
    this._studentcards.getsortedstudentcards(this.column, this.order).subscribe(
      (data:any)=>{
        this.studentcards = data;
      },
      (data:any)=>{
        alert("server Down");
      }
    )

  }
  limit:number = 0;
  page:number = 0;
  pagi(){
    this._studentcards.getpagedstudentcards(this.limit, this.page).subscribe(
      (data:any)=>{
        this.studentcards = data;
      },
      (data:any)=>{
        alert("server Down");
      }
    )

  }

}
