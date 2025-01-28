import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { environment } from '@environments/environments';
import { SidebarComponent } from 'app/components/sidebar/sidebar.component';

@Component({
    selector: 'app-admin-layout',
    templateUrl: './admin-layout.component.html',
    styleUrls: ['./admin-layout.component.css'],
    imports: [RouterOutlet, FormsModule, SidebarComponent]
})
export class AdminLayoutComponent {
  isAuthorized: boolean = false;
  pass: string = "";
  err: string = '';

  onSubmitAuth(data: any): void {
    this.pass === environment.authKey ? this.isAuthorized = true : this.err = "Please enter correct password";
  }
}
