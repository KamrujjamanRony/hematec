import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-dropdown-sub1',
    templateUrl: './dropdown-sub1.component.html',
    styleUrls: ['./dropdown-sub1.component.css'],
    imports: [RouterLink]
})
export class DropdownSub1Component {
  readonly isOpenM = input<boolean>(false);
  readonly toggleDropdown = output<void>();

  onToggleDropdown() {
    this.toggleDropdown.emit();
  }
  isOpen: boolean = false;

  toggleDropdown1() {
    this.isOpen = !this.isOpen;
  }
}
