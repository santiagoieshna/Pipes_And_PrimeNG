import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumberrPageComponent } from './pages/numberr-page/numberr-page.component';
import { CommonPageComponent } from './pages/common-page/common-page.component';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';


@NgModule({
  declarations: [
    BasicsPageComponent,
    NumberrPageComponent,
    CommonPageComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimeNGModule
  ]
})
export class ProductsModule { }
