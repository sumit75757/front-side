import { Component } from '@angular/core';
import {ApiService} from '../../service/api.service';
import{ProductInfo} from '../../Interface/data-type';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
   product : any
  //  product : ProductInfo[] = []
  constructor(private api : ApiService){




  }



}
