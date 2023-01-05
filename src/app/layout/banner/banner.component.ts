import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent  {
  @Input() data :any;

  img:any
  constructor(){
    console.log(this.data);
    setTimeout(() => {
      if (this.data) {
    console.log(this.data);
        this.img = [
          "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/f6bbfa120767719.60b8196525cf4.jpg",
          "https://img.freepik.com/free-vector/sale-banner-with-product-description_1361-1333.jpg",
          "https://i.pinimg.com/originals/f7/06/49/f706494e21b13eea7001df5fadc003be.jpg"
        ]
      }
      else{
    console.log(this.data);

        this.img = [
          "https://res.cloudinary.com/urbanclap/image/upload/images/growth/home-screen/1615375782838-f890f8.jpeg",
          "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_600,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/luminosity/1657110872799-065ca7.jpeg",
          "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_600,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/luminosity/1648808872882-3fb5a3.jpeg"
        ]
      }
      
    }, 2000);
   
  }
  ngOnInit(){
    

  }
}
