import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiceDetailsComponent } from './spice-details.component';

describe('SpiceDetailsComponent', () => {
  let component: SpiceDetailsComponent;
  let fixture: ComponentFixture<SpiceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpiceDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpiceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
