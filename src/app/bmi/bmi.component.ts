import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent {
  height:number = 0;
  weight:number = 0;
  result:number = 0;
  cal(){
    this.result = ((this.height)/((this.weight/100)*(this.weight/100)))
  }

}
