import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityDetailComponentComponent } from './city-detail-component.component';

describe('CityDetailComponentComponent', () => {
  let component: CityDetailComponentComponent;
  let fixture: ComponentFixture<CityDetailComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityDetailComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
