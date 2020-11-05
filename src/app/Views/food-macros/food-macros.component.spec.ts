import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodMacrosComponent } from './food-macros.component';

describe('FoodMacrosComponent', () => {
  let component: FoodMacrosComponent;
  let fixture: ComponentFixture<FoodMacrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodMacrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodMacrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
