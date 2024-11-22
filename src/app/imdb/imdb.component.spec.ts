import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImdbComponent } from './imdb.component';

describe('ImdbComponent', () => {
  let component: ImdbComponent;
  let fixture: ComponentFixture<ImdbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImdbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
