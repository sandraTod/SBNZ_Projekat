import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesByWineComponent } from './recipes-by-wine.component';

describe('RecipesByWineComponent', () => {
  let component: RecipesByWineComponent;
  let fixture: ComponentFixture<RecipesByWineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipesByWineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesByWineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
