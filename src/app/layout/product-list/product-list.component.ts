import { Component } from '@angular/core';
import {ApiService} from '../../service/api.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  productdetails : any;
  imgeurl = "http://localhost:4000"

  constructor(private api:ApiService){

    this.api.product().subscribe((data : any) =>{
      console.warn(data);
       this.productdetails = data.data
    })
  }
}
