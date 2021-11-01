import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEidtOrderComponent } from './add-edit-order.component';

describe('AddOrderComponent', () => {
  let component: AddEidtOrderComponent;
  let fixture: ComponentFixture<AddEidtOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEidtOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEidtOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
