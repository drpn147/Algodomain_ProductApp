import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-save-product',
  templateUrl: './save-product.component.html',
  styleUrls: ['./save-product.component.css']
})
export class SaveProductComponent implements OnInit {

  productId: any;
  product:any;
  vendorID: any;
  constructor(private productService: ProductServiceService,private router: Router,private route:ActivatedRoute) { }


  ngOnInit(): void {
     
    this.product=new Product();
    this.productId=this.route.snapshot.params['productId'];
    this.productService.getproductDetailsById(this.productId).subscribe(
      data=>{console.log(data)
        this.product=data  
      this.vendorID=this.product.vendor.vendorID;
      },
        
        error=>console.error(error)
    );

  }
  list()
  {
    this.router.navigate(['/product']);
  }
  onSubmit()
  {
    // this.productService.getvendorDetailsById(this.vendorID).subscribe(data1=>{

    //   this.product.vendor=a
    // })
    this.productService.createProductDetails(this.product,this.vendorID).subscribe(
      data=>console.log(data),error=>console.error());
      this.product=new Product();
      this.router.navigate(['/product']);

  }
  

}
