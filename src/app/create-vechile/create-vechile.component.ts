import { Component } from '@angular/core';
import { VechileService } from '../vechile.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-vechile',
  templateUrl: './create-vechile.component.html',
  styleUrls: ['./create-vechile.component.css']
})
export class CreateVechileComponent {
constructor(private _vechileService:VechileService){}
public  vehicleForm:FormGroup = new FormGroup(
  {
    Vehicle:new FormControl(),
    manufacturer:new FormControl(),
    model:new FormControl(),
    type:new FormControl(),
    fuel:new FormControl(),
    color:new FormControl(),
    image:new FormControl(),
    cost:new FormControl(),
  },
);
submit(){
  console.log(this.vehicleForm);
  this._vechileService.createVehicle(this.vehicleForm.value).subscribe(
    (data:any)=>{
      alert("created succesfully");
    },
    (err:any)=>{
      alert ("serverdown");
    }
  )
}
}
