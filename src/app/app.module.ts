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
import { LoginComponent } from './login/login.component';
import { AuthService } from './shared/auth.service';
import { HeaderComponent } from './header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule, MatInputModule, MatButtonModule, MatCard} from '@angular/material';
import { JwtModule } from '@auth0/angular-jwt';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PanierService } from './shared/panier.service';
import { BasketComponent } from './basket/basket.component';
import { AdminComponent } from './admin/admin.component';
import { AdminService } from './shared/admin.service';
import { LignePanierService } from './shared/lignepanier.service';


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
    LoginComponent,
    HeaderComponent,
    BasketComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, 
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    JwtModule,
    NgbModule,
  ],
  providers: [
    UserService,
    BrandService,
    CatService,
    ProductService,
    AuthService,
    PanierService,
    AdminService,
    LignePanierService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
