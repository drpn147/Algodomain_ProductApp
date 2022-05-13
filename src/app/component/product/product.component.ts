import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public products : Product[] | undefined;

  constructor(private productService:ProductServiceService,private router:Router) { }

  ngOnInit(): void {
    this.productService.getProductDetails().subscribe(res=>{this.products=res}); 
  }
  deleteProductDetails(productId: any)
  {
    this.productService.deleteProductDetails(productId).subscribe(
    data=>{console.log(data);
    this.productService.getProductDetails().subscribe(res=>{this.products=res});
    },
    error=>console.error(error)
  );

  }

  updateProductDetails(productId: any)
  {
    this.router.navigate(['/update',productId]);
    
  }
  saveProductDetails()
  {
    this.router.navigate(['/save']);
  }
}
