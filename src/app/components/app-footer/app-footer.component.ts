import { Component, OnInit } from '@angular/core';
import { environment } from '@environments/environments';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { AddressModel } from 'app/features/model/address.model';
import { ContactService } from 'app/features/services/contact.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-footer',
    templateUrl: './app-footer.component.html',
    styleUrls: ['./app-footer.component.css'],
    imports: []
})
export class AppFooterComponent implements OnInit {
  // Define FontAwesome icons
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  allContact$?: Observable<AddressModel[]>;
  contact!: any;
  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.allContact$ = this.contactService.getAllContact();
    this.allContact$.subscribe(contactUs => {
      if (contactUs) {
        this.contact = contactUs.find(a => a.companyID === environment.companyCode);
      }
    });
  }
}
