import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent {
  productdetails:any
  constructor(private api: ApiService, private activeroute: ActivatedRoute) {
    activeroute.params.subscribe((res: any) => {
        api.catserch(res).subscribe((res: any) => {
          this.productdetails = res
        })
    })
  }
}
