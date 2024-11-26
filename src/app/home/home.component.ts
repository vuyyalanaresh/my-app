import { Component } from '@angular/core';
import { DummydisplayComponent } from '../dummydisplay/dummydisplay.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { DummydialogDisplayComponent } from '../dummydialog-display/dummydialog-display.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  constructor(private _bottomSheet: MatBottomSheet, public dialog: MatDialog) {}

  openBottomSheet(): void {
    this._bottomSheet.open(DummydisplayComponent);
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DummydialogDisplayComponent, {
      data: {name: "ABC", phone: 90103},
    });
  
}


}
