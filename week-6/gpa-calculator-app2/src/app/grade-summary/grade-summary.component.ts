/*
Title: grade-summary.component.ts
Author: Professor Krasso
Date: 27 November 2022
Modified by: Patrick Wolff
Description: grade summary component for gpa app
*/

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.css']
})
export class GradeSummaryComponent implements OnInit {

  @Input()
  grade!: string;
  @Input()
  course!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
