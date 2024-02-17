import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';


import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    MenuModule,
    BrowserModule,
    BrowserAnimationsModule,
    MenubarModule,
  ],
  exports:[
    ButtonModule,
    MenuModule,
    MenubarModule,
  ]
})
export class PrimeNGModule { }
