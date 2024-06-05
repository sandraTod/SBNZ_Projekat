import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSpiceComponent } from './add-spice.component';

describe('AddSpiceComponent', () => {
  let component: AddSpiceComponent;
  let fixture: ComponentFixture<AddSpiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSpiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSpiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
