import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DropdownSub1Component } from '../dropdown-sub1/dropdown-sub1.component';
import { DropdownSub2Component } from '../dropdown-sub2/dropdown-sub2.component';
import { DropdownSub3Component } from '../dropdown-sub3/dropdown-sub3.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.css'],
  standalone: true,
  imports: [DropdownSub1Component, DropdownSub2Component, DropdownSub3Component, RouterLink]
})
export class DropdownMenuComponent {
  isOpenM: boolean = false;

  toggleDropdown() {
    this.isOpenM = !this.isOpenM;
  }
  toggleDropdownM() {
    this.isOpenM = true;
  }
}
