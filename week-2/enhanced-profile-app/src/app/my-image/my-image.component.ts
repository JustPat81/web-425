/**
 * ===================================================
 * Title: Exercise 2.3 Data Binding
 * Author: Patrick Wolff
 * Date: 30 Oct 2022
 * Description: Basic app using data binding
 * ===================================================
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-image',
  templateUrl: './my-image.component.html',
  styleUrls: ['./my-image.component.css']
})
export class MyImageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
