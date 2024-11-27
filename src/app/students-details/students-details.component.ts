import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-students-details',
  templateUrl: './students-details.component.html',
  styleUrls: ['./students-details.component.css']
})
export class StudentsDetailsComponent {
public userForm:FormGroup = new FormGroup({
  name:new FormControl(),
  class:new FormControl(),
  fathername:new FormControl(),
  email:new FormControl(),
  dob:new FormControl(),
  address:new FormGroup({
  addressline:new FormControl(),
  City:new FormControl(),
  state:new FormControl(),
  pincode:new FormControl('',[Validators.required, Validators.min(3), Validators.max(6)]),
  }),
  type:new  FormControl(),
  marks: new FormArray([])
})
constructor(){
  this.userForm.get('type')?.valueChanges.subscribe(
    (data:any)=>{
      if(data=='DayScholor'){
        this.userForm.addControl('busfee',new FormControl());
        this.userForm.removeControl('hostelfee');
      }
      else{
        this.userForm.addControl('hostelfee',new FormControl());
        this.userForm.removeControl('busfee');
      }
    }
  )
}
get marksFormArray(){
  return this.userForm.get('marks') as FormArray;
}
addmarks(){
  this.marksFormArray.push(
    new FormGroup({
      class:new FormControl(),
      year:new FormControl(),
      Percentage:new FormControl('',[Validators.required, Validators.min(0), Validators.max(100)]),

    })
  )
}
submit(){
  console.log(this.userForm);
}
}
