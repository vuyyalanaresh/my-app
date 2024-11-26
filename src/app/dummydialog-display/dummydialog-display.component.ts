import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dummydialog-display',
  templateUrl: './dummydialog-display.component.html',
  styleUrls: ['./dummydialog-display.component.css']
})
export class DummydialogDisplayComponent {
  constructor(public dialogRef:DialogRef<DummydialogDisplayComponent>,
    @Inject(MAT_DIALOG_DATA)data : any,
  ){}
  
  onNoClick(): void {
    this.dialogRef.close();
  }
}
