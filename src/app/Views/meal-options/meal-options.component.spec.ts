import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealOptionsComponent } from './meal-options.component';

describe('MealOptionsComponent', () => {
  let component: MealOptionsComponent;
  let fixture: ComponentFixture<MealOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
