import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownSub1Component } from './dropdown-sub1.component';

describe('DropdownSub1Component', () => {
  let component: DropdownSub1Component;
  let fixture: ComponentFixture<DropdownSub1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownSub1Component]
    });
    fixture = TestBed.createComponent(DropdownSub1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
