import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSauceComponent } from './add-sauce.component';

describe('AddSauceComponent', () => {
  let component: AddSauceComponent;
  let fixture: ComponentFixture<AddSauceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSauceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSauceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
