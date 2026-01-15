import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WineMoreDetailsComponent } from './wine-more-details.component';

describe('WineMoreDetailsComponent', () => {
  let component: WineMoreDetailsComponent;
  let fixture: ComponentFixture<WineMoreDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WineMoreDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WineMoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
