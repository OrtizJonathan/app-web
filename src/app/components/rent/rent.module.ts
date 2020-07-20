
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RentRoutingModule } from './rent-routing.module';
import { RentComponent } from './rent.component';
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [RentComponent],
  imports: [
    CommonModule,
    RentRoutingModule,
    ReactiveFormsModule
  ]
})
export class RentModule { }