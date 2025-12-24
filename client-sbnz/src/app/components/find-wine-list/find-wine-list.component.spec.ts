import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindWineListComponent } from './find-wine-list.component';

describe('FindWineListComponent', () => {
  let component: FindWineListComponent;
  let fixture: ComponentFixture<FindWineListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindWineListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindWineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
