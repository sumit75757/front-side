import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  productdetails: any;
  imgeurl = "http://localhost:4000"

  constructor(private api: ApiService, private activeroute: ActivatedRoute) {
    activeroute.params.subscribe((res: any) => {
      if (res.catogory != null) {
        api.catserch(res).subscribe((res: any) => {
          this.productdetails = res
        })
      }
      else {
        this.getprod()
      }

    })
  }
  getprod() {
    this.api.product().subscribe((data: any) => {
      this.productdetails = data.data.filter((d:any)=> d.onhome == true)
    })
  }
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    animateIn : true,
    navSpeed: 700,
    navText: ["<", '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}
