import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalhostComponent } from './localhost.component';

describe('LocalhostComponent', () => {
  let component: LocalhostComponent;
  let fixture: ComponentFixture<LocalhostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalhostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalhostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
