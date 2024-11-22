import { Component } from '@angular/core';
import { StudentCardService } from '../student-card.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-studentcard',
  templateUrl: './create-studentcard.component.html',
  styleUrls: ['./create-studentcard.component.css']
})
export class CreateStudentcardComponent {
  constructor(private _studentcardservice:StudentCardService){}
  public studentForm:FormGroup = new FormGroup(
    {
      school_name:new FormControl(),
      name:new FormControl(),
      phone:new FormControl(),
      dob:new FormControl(),
      city:new FormControl(),
      email:new FormControl(),
      profile_picture:new FormControl(),
      school_city:new FormControl(),
      school_pin:new FormControl(),
    },
  );
  submit(){
    console.log(this.studentForm);
    this._studentcardservice.createstudentcards(this.studentForm.value).subscribe(
      (data:any)=>{
        alert("created succesfully");
      },
      (err:any)=>{
        alert("serverdown");
      }
    )
  }

}
