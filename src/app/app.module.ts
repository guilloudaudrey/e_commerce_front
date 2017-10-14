import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserService } from './shared/user.service'
import { AppComponent } from './app.component';
import { NewuserComponent } from './newuser/newuser.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NewuserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, 
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
