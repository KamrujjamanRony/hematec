import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { environment } from '@environments/environments';
import { SidebarComponent } from 'app/components/sidebar/sidebar.component';
import { DataService } from 'app/features/services/data.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css'],
  imports: [RouterOutlet, FormsModule, SidebarComponent]
})
export class AdminLayoutComponent {
  private readonly dataService = inject(DataService);
  password: string = "";
  isAuthorized: boolean = false;
  pass: string = "";
  err: string = '';

  ngOnInit() {
    // Fetch the password from the JSON file
    this.dataService.getPassword().subscribe((data: any) => {
      this.password = data;
    });
  }

  onSubmitAuth(data: any): void {
    this.pass === this.password ? this.isAuthorized = true : this.err = "Please enter correct password";
  }
}
