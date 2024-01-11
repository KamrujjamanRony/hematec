import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownSub3Component } from './dropdown-sub3.component';

describe('DropdownSub3Component', () => {
  let component: DropdownSub3Component;
  let fixture: ComponentFixture<DropdownSub3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownSub3Component]
    });
    fixture = TestBed.createComponent(DropdownSub3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
