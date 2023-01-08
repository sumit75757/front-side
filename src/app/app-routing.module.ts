import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './auth1/signup/signup.component';
// import { CatgorynavComponent } from './layout/catgorynav/catgorynav.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ProductDetailsComponent } from './layout/product-details/product-details.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProductListComponent } from './layout/product-list/product-list.component';
import { ListProductComponent } from './layout/list-product/list-product.component';
import{CartComponent} from './layout/cart/cart.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    children: [
      {
        path: 'home',
        component: HomepageComponent,
      },
      {
        path : 'product/:catogory',
        component:ListProductComponent ,
      },
      {
        path:'shopping-cart' ,
        component:CartComponent,
      }
    ],
  },
  {
    path:"auth",component:SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppRoutingModule {}
