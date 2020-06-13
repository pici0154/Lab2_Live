import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostItemDetailsComponent } from './cost-item-details.component';

describe('CostItemDetailsComponent', () => {
  let component: CostItemDetailsComponent;
  let fixture: ComponentFixture<CostItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostItemDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
