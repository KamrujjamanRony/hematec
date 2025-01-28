import { Observable } from 'rxjs';
import { Component, inject } from '@angular/core';
import { environment } from '@environments/environments';
import { RouterLink } from '@angular/router';
import { CarouselModel } from 'app/features/model/carousel.model';
import { CarouselService } from 'app/features/services/carousel.service';
import { CoverComponent } from '../cover/cover.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel-list',
  templateUrl: './carousel-list.component.html',
  styleUrls: ['./carousel-list.component.css'],
  imports: [CoverComponent, RouterLink, CommonModule]
})
export class CarouselListComponent {
  private carouselService = inject(CarouselService);
  yourTitle: string = 'all carousel information';
  yourSub1: string = 'Dashboard';
  yourSub2: string = 'Carousel';
  img: string = 'https://img.freepik.com/free-photo/minimalistic-science-banner-with-stethoscope_23-2149431138.jpg?w=1380&t=st=1701010689~exp=1701011289~hmac=4cf7508d543ecb1a8ead41a975e20f6e66168d67642c1abfd887edf5c8fe7840';
  emptyImg: string = environment.emptyImg;
  loading: boolean = true;
  carousels$?: Observable<CarouselModel[]>;
  companyID: number = environment.companyCode;
  ImageApi: string = environment.ImageApi;
  isModalOpen = false;

  ngOnInit(): void {
    this.carousels$ = this.carouselService.getCompanyCarousel(this.companyID);

    this.carousels$.subscribe(() => {
      this.loading = false;
    });
  }

  onDelete(id: string): void {
    if (confirm("Are you sure you want to delete?")) {
      this.carouselService.deleteCarousel(id).subscribe(data => {
        if (data) {
          this.carousels$ = this.carouselService.getCompanyCarousel(this.companyID);
          alert("Carousel deleted successfully!");
        } else {
          console.error('Error deleting Carousel:', data);
        }
      });
    }
  }

  closeModal(): void {
    this.isModalOpen = false;
  }
}
