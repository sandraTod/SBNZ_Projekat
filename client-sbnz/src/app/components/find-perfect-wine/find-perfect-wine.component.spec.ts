import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPerfectWineComponent } from './find-perfect-wine.component';

describe('FindPerfectWineComponent', () => {
  let component: FindPerfectWineComponent;
  let fixture: ComponentFixture<FindPerfectWineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindPerfectWineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindPerfectWineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
