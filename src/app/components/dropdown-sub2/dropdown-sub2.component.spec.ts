import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownSub2Component } from './dropdown-sub2.component';

describe('DropdownSub2Component', () => {
  let component: DropdownSub2Component;
  let fixture: ComponentFixture<DropdownSub2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownSub2Component]
    });
    fixture = TestBed.createComponent(DropdownSub2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
