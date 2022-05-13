import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './component/product/product.component';
import { SaveProductComponent } from './component/save-product/save-product.component';
import { Product } from './model/product';

const routes: Routes = [
  {path:'',redirectTo: 'product',pathMatch: 'full'},
  {path:'product',component:ProductComponent},
  {path: 'update/:productId', component:SaveProductComponent},
  {path: 'save',component:SaveProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
