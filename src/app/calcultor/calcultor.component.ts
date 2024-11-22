import { Component } from '@angular/core';

@Component({
  selector: 'app-calcultor',
  templateUrl: './calcultor.component.html',
  styleUrls: ['./calcultor.component.css']
})
export class CalcultorComponent {
  num1:number = 0;
  num2:number = 0;

  result:number = 0;
  sum(){
    this.result = this.num1 +this.num2;
  }
  sub(){
    this.result = this.num1 - this.num2;
  }
  mul(){
    this.result = this.num1 * this.num2;
  }
div(){
  this.result = this.num1 / this.num2;
}

}
