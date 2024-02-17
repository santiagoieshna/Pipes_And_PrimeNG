import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';
import { MenubarComponent } from './components/menubar/menubar.component';



@NgModule({
  declarations: [
    MenuComponent,
    MenubarComponent,
  ],
  imports: [
    CommonModule,
    PrimeNGModule
  ],
  exports: [
    MenuComponent,
    MenubarComponent
  ]
})
export class SharedModule { }
