import { Component } from '@angular/core';
import { VechileService } from '../vechile.service';

@Component({
  selector: 'app-vechile',
  templateUrl: './vechile.component.html',
  styleUrls: ['./vechile.component.css']
})
export class VechileComponent {
  vechiles:any = [];
  term:string = "";
  constructor( private _vechileService:VechileService){
    _vechileService.getVechiles().subscribe(
      (data:any)=>{
        this.vechiles = data;
      
      },
      (err:any)=>{
        alert("Internal server error");
      }
      )
    
  }
  filter(){
    this._vechileService.getFilteredVechiles(this.term).subscribe(
      (data:any)=>{
        this.vechiles = data;
      },
      (err:any)=>{
        alert("internala")
      }
    )
  }
  column:string = "";
  order:string = "";
  sort(){
  this._vechileService.getSortedVechiles(this.column, this.order).subscribe(
    (data:any)=>{
      this.vechiles = data;
    },
    (err:any)=>{
      alert("internala")
    }
  )
}
delete(id:string){
  this._vechileService.deleteVechiles(id).subscribe(
    (data:any)=>{
      alert ("Deleted success!!!");
      location.reload();
    },
    (err:any)=>{
      alert("servere")
    }
  )
}
limit:number = 0;
page:number = 0;
pagination(){
  this._vechileService.getpagedVechiles(this.limit, this.page).subscribe(
    (data:any)=>{
      this.vechiles = data;
    },
    (err:any)=>{
      alert("internala");
    }
  )
}

}
