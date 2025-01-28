import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-dropdown-sub2',
    templateUrl: './dropdown-sub2.component.html',
    styleUrls: ['./dropdown-sub2.component.css'],
    imports: [RouterLink]
})
export class DropdownSub2Component {
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
