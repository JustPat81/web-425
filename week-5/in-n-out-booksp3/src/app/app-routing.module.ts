/**
 * Title: app-routing.module.ts
 * Author: Professor Krasso
 * Date: 20 November 2022
 * Modified by: Patrick Wolff
 * Description: Routing file
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BookListComponent } from './book-list/book-list.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: BookListComponent
  },
  {
    path: '/book-list',
    component: BookListComponent
  },
  {
    path: '/contact',
    component: ContactComponent
  },
  {
    path: '/about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
