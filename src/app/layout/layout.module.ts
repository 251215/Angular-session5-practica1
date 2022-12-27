import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CardsComponent } from './cards/cards.component';



@NgModule({
  declarations: [
    NavbarComponent,
    CardsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    CardsComponent,
  ]
})
export class LayoutModule { }
