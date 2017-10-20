import { Routes } from "@angular/router";
import { NewbrandComponent } from "./newbrand/newbrand.component";
import { NewuserComponent } from "./newuser/newuser.component";
import { NewproductComponent } from "./newproduct/newproduct.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { NewCategoryComponent } from "./new-category/new-category.component";
import { ListeUserComponent } from "./liste-user/liste-user.component";
import { ListeProductComponent } from "./liste-product/liste-product.component";
import { ProductPageComponent } from "./product-page/product-page.component";



/*
    Les routes vont devoir définir le path (l'url) et 
    le component à associer à ce path. Si l'url match
    un path, le component en question sera instancié et
    placé à l'intérieur de la balise <router-outlet>
*/

export const appRoutes:Routes = [
    {path: 'newbrand', component: NewbrandComponent},
    {path: 'newuser', component: NewuserComponent},
    {path: 'newproduct', component: NewproductComponent},
    {path:'newcategory', component: NewCategoryComponent},
    {path:'products', component:ListeProductComponent},
    {path: 'product/:id', component: ProductPageComponent},

    //On peut faire des redirections sur certaines routes
    // {path: '', pathMatch:'full' , redirectTo: '/chiens'},
    //Cette route est la wildcare, elle match toutes les
    //routes et doit donc être placée en dernier sous 
    //peine de la voir prendre le dessus sur toutes les
    //autres. On peut s'en servir pour faire un 404
    {path: '**', component:NotfoundComponent}
];