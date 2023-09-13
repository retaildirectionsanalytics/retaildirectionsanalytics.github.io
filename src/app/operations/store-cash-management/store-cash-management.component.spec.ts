import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreCashManagementComponent } from './store-cash-management.component';

describe('StoreCashManagementComponent', () => {
  let component: StoreCashManagementComponent;
  let fixture: ComponentFixture<StoreCashManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreCashManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreCashManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
