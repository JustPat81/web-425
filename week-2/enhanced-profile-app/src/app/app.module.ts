/**
 * ===================================================
 * Title: Exercise 2.3 Data Binding
 * Author: Patrick Wolff
 * Date: 30 Oct 2022
 * Description: Basic app using data binding
 * ===================================================
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyImageComponent } from './my-image/my-image.component';
import { MyDetailsComponent } from './my-details/my-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MyImageComponent,
    MyDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
