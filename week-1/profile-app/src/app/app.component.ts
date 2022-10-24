/*
==============================================
; Title: Assignment 1.5 - Components
; Author: Patrick Wolff
; Date: 23 October 2022
; Description: Assignment introducing the use
; of components in Angular.
==============================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment: string = 'Assignment 1.5 - Components'
}
