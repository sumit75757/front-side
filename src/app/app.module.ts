import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ApiService } from './service/api.service';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { SignupComponent } from './auth1/signup/signup.component';
// import { CatgorynavComponent } from './layout/newcategorynav/';
import { FooterComponent } from './layout/footer/footer.component';
import { ProductDetailsComponent } from './layout/product-details/product-details.component';
import { ContactComponent } from './pages/contact/contact.component';
import{RouteConfigLoadEnd, ROUTER_CONFIGURATION} from '@angular/router';
import { BannerComponent } from './layout/banner/banner.component';
import { ProductListComponent } from './layout/product-list/product-list.component';
import { AddComponent } from './layout/add/add.component';
import { LeftSidebarComponent } from './layout/left-sidebar/left-sidebar.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SrinkPipe } from './pipe/srink.pipe';
import { ListProductComponent } from './layout/list-product/list-product.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
<<<<<<< HEAD
import { ServicehomeComponent } from './layout/servicehome/servicehome.component';
=======
import { CartComponent } from './layout/cart/cart.component';
>>>>>>> b8c4dc80424718b1f7be272870fd64a2b6501de7

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    SignupComponent,
    // CatgorynavComponent,
    FooterComponent,
    ProductDetailsComponent,
    ContactComponent,
    BannerComponent,
    ProductListComponent,
    AddComponent,
    LeftSidebarComponent,
    SrinkPipe,
    ListProductComponent,
    AboutUsComponent,
<<<<<<< HEAD
    ServicehomeComponent
=======
    CartComponent
>>>>>>> b8c4dc80424718b1f7be272870fd64a2b6501de7
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule,
    CarouselModule,
    // RouteConfigLoadEnd,

  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
