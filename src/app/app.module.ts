import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserService } from './shared/user.service'
import { AppComponent } from './app.component';
import { NewuserComponent } from './newuser/newuser.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewproductComponent } from './newproduct/newproduct.component';
import { NewbrandComponent } from './newbrand/newbrand.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { BrandService } from './shared/brand.service';
import { NewCategoryComponent } from './new-category/new-category.component';
import { CatService } from './shared/category.service';
import { ProductService } from './shared/product.service';
import { Category } from './shared/Category';
import { ListeUserComponent } from './liste-user/liste-user.component';
import { ListeProductComponent } from './liste-product/liste-product.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { UpdateProductComponent } from './update-product/update-product.component';



@NgModule({
  declarations: [
    AppComponent,
    NewuserComponent,
    NewproductComponent,
    NewbrandComponent,
    NotfoundComponent,
    NewCategoryComponent,
    ListeUserComponent,
    ListeProductComponent,
    ProductPageComponent,
    UpdateProductComponent,
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, 
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
    
  
  ],
  providers: [
    UserService,
    BrandService,
    CatService,
    ProductService,


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
