/**
 * ===================================================
 * Title: Exercise 2.3 Data Binding
 * Author: Patrick Wolff
 * Date: 30 Oct 2022
 * Description: Basic app using data binding
 * ===================================================
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
isLoggedIn: Boolean = true;
assignment: string = 'Exercise 2.3 - Data Binding';
}
