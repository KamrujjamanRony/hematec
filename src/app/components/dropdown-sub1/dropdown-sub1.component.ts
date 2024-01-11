import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dropdown-sub1',
  templateUrl: './dropdown-sub1.component.html',
  styleUrls: ['./dropdown-sub1.component.css'],
  standalone: true,
  imports: [RouterLink]
})
export class DropdownSub1Component {
  @Input() isOpenM: boolean = false;
  @Output() toggleDropdown: EventEmitter<void> = new EventEmitter<void>();

  onToggleDropdown() {
    this.toggleDropdown.emit();
  }
  isOpen: boolean = false;

  toggleDropdown1() {
    this.isOpen = !this.isOpen;
  }
}
