import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AgregarComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ProductosModule { }
