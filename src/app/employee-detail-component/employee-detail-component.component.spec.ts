import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetailComponentComponent } from './employee-detail-component.component';

describe('EmployeeDetailComponentComponent', () => {
  let component: EmployeeDetailComponentComponent;
  let fixture: ComponentFixture<EmployeeDetailComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeDetailComponentComponent]
    });
    fixture = TestBed.createComponent(EmployeeDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
