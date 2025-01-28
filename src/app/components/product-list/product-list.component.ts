import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { environment } from '@environments/environments';
import { Observable } from 'rxjs';
import { CoverComponent } from '../cover/cover.component';
import { ProductModel } from 'app/features/model/product.model';
import { ProductService } from 'app/features/services/product.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  imports: [CoverComponent, RouterLink, CommonModule]
})



export class ProductListComponent {
  private productService = inject(ProductService);
  private router = inject(Router);
  yourTitle: string = 'all products list';
  yourSub1: string = 'Dashboard';
  yourSub2: string = 'Products';
  img: string = 'https://img.freepik.com/free-photo/doctors-stethoscope-white-background_53876-146858.jpg?w=1380&t=st=1701010335~exp=1701010935~hmac=d87ccb8622bcec8e4fc9de907ac3d31b429544dc0e04920b7e8abdba2e682d62';
  emptyImg: string = environment.emptyImg;
  loading: boolean = true;
  products$?: Observable<ProductModel[]>;
  companyID: number = environment.companyCode;
  ImageApi: string = environment.ImageApi;
  isModalOpen = false;
  // constructor() {
  //   if (!this.products$) {
  //     this.products$ = productService.getCompanyProducts(this.companyID);
  //     this.products$.subscribe(() => {
  //       this.loading = false;
  //     });
  //   }
  // }

  ngOnInit(): void {
    this.products$ = this.productService.getCompanyProducts(this.companyID);

    this.products$.subscribe(() => {
      this.loading = false;
    });
  }

  onDelete(id: string): void {
    if (confirm("Are you sure you want to delete?")) {
      this.productService.deleteProduct(id).subscribe(data => {
        if (data) {
          this.products$ = this.productService.getCompanyProducts(this.companyID);
          alert("Product deleted successfully!");
        } else {
          console.error('Error deleting Product:', data);
        }
      });
    }
  }
}