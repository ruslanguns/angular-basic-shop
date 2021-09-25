import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProductsComponent } from './products/products.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [ProductsComponent, ProductDetailComponent],
  imports: [SharedModule, ProductRoutingModule],
})
export class ProductModule {}
