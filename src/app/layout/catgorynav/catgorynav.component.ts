import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-catgorynav',
  templateUrl: './catgorynav.component.html',
  styleUrls: ['./catgorynav.component.css']
})
export class CatgorynavComponent {
  catogory: any;
  constructor(private api : ApiService) {
    this.api.catogory().subscribe((res:any)=>{
     this.catogory = res.data
    })
   }


  //  left() {
  //    document.getElementById('container').scrollLeft += 20;
  //  };
  //  right() {
  //    document.getElementById('container').scrollLeft -= 20;
  //  };
}

