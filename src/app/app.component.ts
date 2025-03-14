import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import AOS from 'aos';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [RouterOutlet]
})
export class AppComponent {
  title = 'Medical Solution Technology';
  ngOnInit(): void {
    AOS.init({
      duration: 750,
      delay: 150,
      once: true,
    })
    console.log("Develope by Md. Kamrujjaman at SuperSoft")
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      AOS.refresh()
    }, 500)
  }
  
}
