import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
    selector: 'app-cover',
    templateUrl: './cover.component.html',
    styleUrls: ['./cover.component.css'],
    imports: [CommonModule]
})
export class CoverComponent {
  readonly title = input<string>('');
  readonly sub1 = input<string>('');
  readonly sub2 = input<string>('');
  readonly img = input<string>('');
}
