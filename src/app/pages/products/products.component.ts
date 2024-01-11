import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '@environments/environments';
import { CoverComponent } from 'app/components/cover/cover.component';
import { ProductCardComponent } from 'app/components/product-card/product-card.component';
import { ProductModel } from 'app/features/model/product.model';
import { ProductService } from 'app/features/services/product.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  standalone: true,
  imports: [CoverComponent, ProductCardComponent]
})
export class ProductsComponent implements OnInit, OnDestroy {
  yourTitle!: string;
  yourSub1: string = 'Home';
  yourSub2: string = 'Products';
  img: string = 'https://img.freepik.com/free-photo/figurine-heart-surrounded-by-capsules_23-2148441899.jpg?w=1380&t=st=1701011273~exp=1701011873~hmac=8441e68cf4ede6d7211a1c57cdc0bb51e25ea970961de530573fdd9144b55d65';
  category: string | null = null;
  paramsSubscription?: Subscription;
  products: any[] | undefined;
  categoryProducts: any[] | undefined;

  hematology: any[] | undefined;
  endoscopy: any[] | undefined;
  biochemistry: any[] | undefined;
  electrolyte: any[] | undefined;
  poct: any[] | undefined;
  hormone: any[] | undefined;
  esr: any[] | undefined;
  urineAnalyzer: any[] | undefined;
  microscope: any[] | undefined;
  centrifuge: any[] | undefined;
  labRotator: any[] | undefined;
  rollerMixer: any[] | undefined;
  xRay: any[] | undefined;
  ultrasonogram: any[] | undefined;
  cArm: any[] | undefined;
  ecg: any[] | undefined;
  emg: any[] | undefined;
  eeg: any[] | undefined;
  otLight: any[] | undefined;
  anesthesia: any[] | undefined;
  diathermy: any[] | undefined;
  icu: any[] | undefined;
  patientMonitor: any[] | undefined;
  pulseOximeter: any[] | undefined;



  products$?: Observable<ProductModel[]>;
  companyID: number = environment.companyCode;
  loading: boolean = true;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private renderer: Renderer2
  ) {
    if (!this.products$) {
      this.products$ = productService.getCompanyProducts(this.companyID);
    }
  }

  ngOnInit(): void {
    this.loading = true;
    this.paramsSubscription = this.route.paramMap.subscribe((params) => {
      this.category = params.get('category');
      if (this.category === 'hematology') {
        this.yourTitle = 'Hematology';
      } else if (this.category==="endoscopy") {
        this.yourTitle = "Video Endoscopy"
      } else if (this.category === 'biochemistry') {
        this.yourTitle = 'Biochemistry';
      } else if (this.category === 'electrolyte') {
        this.yourTitle = 'Electrolyte';
      } else if (this.category === 'poct') {
        this.yourTitle = 'POCT';
      } else if (this.category === 'hormone') {
        this.yourTitle = 'Hormone';
      } else if (this.category === 'esr') {
        this.yourTitle = 'ESR';
      } else if (this.category === 'urineAnalyzer') {
        this.yourTitle = 'Urine Analyzer';
      } else if (this.category === 'microscope') {
        this.yourTitle = 'Microscope';
      } else if (this.category === 'centrifuge') {
        this.yourTitle = 'Centrifuge';
      } else if (this.category === 'labRotator') {
        this.yourTitle = 'Lab Rotator';
      } else if (this.category === 'rollerMixer') {
        this.yourTitle = 'Roller Mixer';
      } else if (this.category === 'xRay') {
        this.yourTitle = 'X-Ray';
      } else if (this.category === 'ultrasonogram') {
        this.yourTitle = 'Ultrasonogram';
      } else if (this.category === 'cArm') {
        this.yourTitle = 'C-Arm';
      } else if (this.category === 'ecg') {
        this.yourTitle = 'ECG';
      } else if (this.category === 'emg') {
        this.yourTitle = 'EMG';
      } else if (this.category === 'eeg') {
        this.yourTitle = 'EEG';
      } else if (this.category === 'otLight') {
        this.yourTitle = 'OT Light/OT Table';
      } else if (this.category === 'anesthesia') {
        this.yourTitle = 'Anesthesia & ventilators';
      } else if (this.category === 'diathermy') {
        this.yourTitle = 'Diathermy';
      } else if (this.category === 'icu') {
        this.yourTitle = 'ICU/CCU';
      } else if (this.category === 'patientMonitor') {
        this.yourTitle = 'Patient Monitor';
      } else if (this.category === 'pulseOximeter') {
        this.yourTitle = 'Pulse Oximeter';
      } else {
        this.yourTitle = 'All Equipments';
      }
      if (!this.products) {
        // this.products$ = this.productService.getCompanyProducts(this.companyID);
        this.products$?.subscribe((products) => {
          this.loading = false;
          this.categoryProducts = products;
          this.filterByParams(products);
        });
      } else {
        // Products are already loaded, filter them
        this.filterByParams(this.products);
      }
    });
  }

  ngOnDestroy(): void {
    this.paramsSubscription?.unsubscribe();
  }

  filterByParams(products: ProductModel[]): void {
        this.hematology = products.filter(
          (product) => product?.productCategory === 'Hematology'
        );
        this.endoscopy = this.products?.filter(
          (product) => product?.category === "Video Endoscopy"
        );
        this.biochemistry = products.filter(
          (product) => product?.productCategory === 'Biochemistry'
        );
        this.electrolyte = products.filter(
          (product) => product?.productCategory === 'Electrolyte'
        );
        this.poct = products.filter(
          (product) => product?.productCategory === 'POCT'
        );
        this.hormone = products.filter(
          (product) => product?.productCategory === 'Hormone'
        );
        this.esr = products.filter(
          (product) => product?.productCategory === 'ESR'
        );
        this.urineAnalyzer = products.filter(
          (product) => product?.productCategory === 'Urine Analyzer'
        );
        this.microscope = products.filter(
          (product) => product?.productCategory === 'Microscope'
        );
        this.centrifuge = products.filter(
          (product) => product?.productCategory === 'Centrifuge'
        );
        this.labRotator = products.filter(
          (product) => product?.productCategory === 'Lab Rotator'
        );
        this.rollerMixer = products.filter(
          (product) => product?.productCategory === 'Roller Mixer'
        );
        this.xRay = products.filter(
          (product) => product?.productCategory === 'X-Ray'
        );
        this.ultrasonogram = products.filter(
          (product) => product?.productCategory === 'Ultrasonogram'
        );
        this.cArm = products.filter(
          (product) => product?.productCategory === 'C-Arm'
        );
        this.ecg = products.filter(
          (product) => product?.productCategory === 'ECG'
        );
        this.emg = products.filter(
          (product) => product?.productCategory === 'EMG'
        );
        this.eeg = products.filter(
          (product) => product?.productCategory === 'EEG'
        );
        this.otLight = products.filter(
          (product) => product?.productCategory === 'OT Light/OT Table'
        );
        this.anesthesia = products.filter(
          (product) => product?.productCategory === 'Anesthesia & ventilators'
        );
        this.diathermy = products.filter(
          (product) => product?.productCategory === 'Diathermy'
        );
        this.icu = products.filter(
          (product) => product?.productCategory === 'ICU/CCU'
        );
        this.patientMonitor = products.filter(
          (product) => product?.productCategory === 'Patient Monitor'
        );
        this.pulseOximeter = products.filter(
          (product) => product?.productCategory === 'Pulse Oximeter'
        );
        this.products = products;
  }

  scrollToTop() {
    // Scroll to the top of the page
    this.renderer.setProperty(document.documentElement, 'scrollTop', 0);
  }
}
