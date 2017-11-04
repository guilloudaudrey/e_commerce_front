import { Routes } from "@angular/router";
import { NewbrandComponent } from "./newbrand/newbrand.component";
import { NewuserComponent } from "./newuser/newuser.component";
import { NewproductComponent } from "./newproduct/newproduct.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { NewCategoryComponent } from "./new-category/new-category.component";
import { ListeUserComponent } from "./liste-user/liste-user.component";
import { ListeProductComponent } from "./liste-product/liste-product.component";
import { ProductPageComponent } from "./product-page/product-page.component";
import { UpdateProductComponent } from "./update-product/update-product.component";
import { LoginComponent } from "./login/login.component";
import { BasketComponent } from "./basket/basket.component";
import { AdminComponent } from "./admin/admin.component";



export const appRoutes:Routes = [
    {path: 'newbrand', component: NewbrandComponent},
    {path: 'newuser', component: NewuserComponent},
    {path: 'newproduct', component: NewproductComponent},
    {path:'newcategory', component: NewCategoryComponent},
    {path:'login', component:LoginComponent},
    {path:'users', component:ListeUserComponent},
    {path:'products', component:ListeProductComponent},
    {path:'', component:ListeProductComponent},
    {path:'basket', component:BasketComponent},
    {path: 'product/:id', component: ProductPageComponent},
    {path:'admin', component:AdminComponent},
    {path:'login', component:LoginComponent},
    { path: '**', redirectTo: '' }
];