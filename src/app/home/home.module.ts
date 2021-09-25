import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    FeaturedProductsComponent,
    AboutUsComponent,
    ContactUsComponent,
    CarouselComponent,
    HomeComponent,
  ],
  imports: [SharedModule, HomeRoutingModule],
})
export class HomeModule {}
