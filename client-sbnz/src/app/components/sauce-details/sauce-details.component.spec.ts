import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SauceDetailsComponent } from './sauce-details.component';

describe('SauceDetailsComponent', () => {
  let component: SauceDetailsComponent;
  let fixture: ComponentFixture<SauceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SauceDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SauceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
