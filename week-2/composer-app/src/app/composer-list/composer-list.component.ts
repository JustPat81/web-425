/**
 * Title: composer-list.component.ts
 * Author: Professor Krasso
 * Date: 30 October 2022
 * Modified by: Patrick Wolff
 * Description: Composer list component
 */

import { Component, OnInit } from '@angular/core';

export default class Composer {
  fullName: string;
  genre: string;

  constructor(fullName: string, genre: string) {
    this.fullName = fullName;
    this.genre = genre;
  }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  composers: Array<Composer>;

  constructor() {
    this.composers = [
      new Composer("John Williams", "Jazz"),
      new Composer("John Adams", "Opera"),
      new Composer("John Amner", "Renaissance"),
      new Composer("Jean-Philippe Rameau", "Ballet"),
      new Composer("John Bennet", "Classical")
    ]
   }

  ngOnInit(): void {
  }

}
