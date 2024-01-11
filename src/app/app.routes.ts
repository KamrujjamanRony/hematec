import { Routes } from "@angular/router";
import { AboutUsComponent } from "./components/about-us/about-us.component";
import { AddCarouselComponent } from "./components/add-carousel/add-carousel.component";
import { AddProductComponent } from "./components/add-product/add-product.component";
import { CarouselListComponent } from "./components/carousel-list/carousel-list.component";
import { ContactUsComponent } from "./components/contact-us/contact-us.component";
import { EditCarouselComponent } from "./components/edit-carousel/edit-carousel.component";
import { EditProductComponent } from "./components/edit-product/edit-product.component";
import { ProductDetailsComponent } from "./components/product-details/product-details.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { MainLayoutComponent } from "./layouts/main-layout/main-layout.component";
import { AboutComponent } from "./pages/about/about.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { HomeComponent } from "./pages/home/home.component";
import { ProductsComponent } from "./pages/products/products.component";


export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'products/:category',
        component: ProductsComponent,
      },
      {
        path: 'product/:id',
        component: ProductDetailsComponent,
      },
    ],
  },
  {
    path: 'hema34',
    component: AdminLayoutComponent,
    children: [
      { path: '', component: ProductListComponent },
      { path: 'products', component: ProductListComponent },
      { path: 'add-product', component: AddProductComponent },
      { path: 'products/add-product', component: AddProductComponent },
      { path: 'edit-product/:id', component: EditProductComponent },
      { path: 'products/edit-product/:id', component: EditProductComponent },
      { path: 'about-us/:id', component: AboutUsComponent },
      { path: 'contact-us/:id', component: ContactUsComponent },
      { path: 'carousel', component: CarouselListComponent },
      { path: 'carousel/add-carousel', component: AddCarouselComponent },
      { path: 'carousel/edit-carousel/:id', component: EditCarouselComponent },
    ],
  },
];
