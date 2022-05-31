import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { HeaderFooterComponent } from './header-footer/header-footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {MatRadioModule} from'@angular/material/radio';
import {FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    HeaderFooterComponent,
  
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatRadioModule,
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
