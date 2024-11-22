import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeRegistrationComponent } from './employe-registration.component';

describe('EmployeRegistrationComponent', () => {
  let component: EmployeRegistrationComponent;
  let fixture: ComponentFixture<EmployeRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
