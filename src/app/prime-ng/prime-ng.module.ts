import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
// import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import {  PanelModule} from "primeng/panel";



@NgModule({
  declarations: [],
  imports: [
    // MenuModule,
    ButtonModule,
    CommonModule,
    MenubarModule,

  ],
  exports:[
    // MenuModule,
    ButtonModule,
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    PanelModule,
  ]
})
export class PrimeNGModule { }
