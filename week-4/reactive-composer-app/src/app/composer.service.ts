/**
 * Title: composer.service.ts
 * Author: Professor Krasso
 * Date: 13 November 2022
 * Modified by: Patrick Wolff
 * Description: Service class file for Composer object
 */

import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {
  composers: Array<IComposer>;

  constructor() {
    this.composers = [
      {composerId: 100, fullName: "John Williams", genre: "Jazz"},
      {composerId: 101, fullName: "John Adams", genre: "Opera"},
      {composerId: 102, fullName: "John Amner", genre: "Renaissance"},
      {composerId: 103, fullName: "Jean-Philippe Rameau", genre: "Ballet"},
      {composerId: 104, fullName: "John Bennet", genre: "Classical"}
    ]
   }

   getComposers() {
     return this.composers;
   }

   getComposer(composerId: number) : IComposer {
     for (let composer of this.composers) {
       if (composer.composerId === composerId) {
         return composer;
       }
     }
     return {} as IComposer;
   }
}
