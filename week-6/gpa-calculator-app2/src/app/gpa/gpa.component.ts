/*
Title: grade.component.ts
Author: Professor Krasso
Date: 27 November 2022
Modified by: Patrick Wolff
Description: Grade Component
*/

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css']
})
export class GpaComponent implements OnInit {

  @Input()
  gpaTotal!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
