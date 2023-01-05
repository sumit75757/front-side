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
import { CatgorynavComponent } from './layout/catgorynav/catgorynav.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ProductDetailsComponent } from './layout/product-details/product-details.component';
import { ContactComponent } from './pages/contact/contact.component';

import { BannerComponent } from './layout/banner/banner.component';
import { ProductListComponent } from './layout/product-list/product-list.component';
import { AddComponent } from './layout/add/add.component';
import { LeftSidebarComponent } from './layout/left-sidebar/left-sidebar.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SrinkPipe } from './pipe/srink.pipe';
import { ListProductComponent } from './layout/list-product/list-product.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { NewcatComponent } from './newcat/newcat.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    SignupComponent,
    CatgorynavComponent,
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
    NewcatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule,
    CarouselModule

  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
