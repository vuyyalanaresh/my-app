import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummydialogDisplayComponent } from './dummydialog-display.component';

describe('DummydialogDisplayComponent', () => {
  let component: DummydialogDisplayComponent;
  let fixture: ComponentFixture<DummydialogDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummydialogDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DummydialogDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
