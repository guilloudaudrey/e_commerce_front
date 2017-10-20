import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserService } from './shared/user.service'
import { AppComponent } from './app.component';
import { NewuserComponent } from './newuser/newuser.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from './shared/auth.service';
import { LoginComponent } from './login/login.component';
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
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    NewuserComponent,
    LoginComponent,
    NewproductComponent,
    NewbrandComponent,
    NotfoundComponent,
    NewCategoryComponent,
    ListeUserComponent,
    ListeProductComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, 
    RouterModule.forRoot(appRoutes),
    
  
  ],
  providers: [
    UserService,
    AuthenticationService,
    BrandService,
    CatService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
