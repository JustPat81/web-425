/**
 * Title: books.service.ts
 * Author: Professor Krasso
 * Date: 20 November 2022
 * Description: Service class for book objects
 */

import { Injectable } from '@angular/core';
import { IBook } from './book.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: Array<IBook>;

  constructor() {
    this.books = [
      {
        isbn: '0385199570',
        title: 'The Stand',
        description: "Apocalyptic vision of a world blasted by plague and embroiled in an elemental struggle between good and evil",
        numOfPages: 1152,
        authors: ['Stephen King']
      },
      {
        isbn: '1451663838',
        title: '11/22/63',
        description: "On November 22, 1963, three shots rang out in Dallas, President Kennedy died, and the world changed. What if you could change it back?",
        numOfPages: 849,
        authors: ['Stephen King']
      },
      {
        isbn: '9780765326355',
        title: 'The Way of Kings: Book One of the Stormlight Archive',
        description: "It has been centuries since the fall of the ten consecrated orders known as the Knights Radiant, but their Shardblades and Shardplate remain: mystical swords and suits of armor that transform ordinary men into near-invincible warriors.",
        numOfPages: 1008,
        authors: ['Brandon Sanderson']
      },
      {
        isbn: '0385312083',
        title: 'Slaughterhouse-Five',
        description: "Slaughterhouse-Five, an American classic, is one of the world’s great antiwar books. Centering on the infamous World War II firebombing of Dresden.",
        numOfPages: 240,
        authors: ['Kurt Vonnegut']
      },
      {
        isbn: '1451673264',
        title: 'Fahrenheit 451',
        description: "Guy Montag is a fireman. His job is to destroy the most illegal of commodities, the printed book, along with the houses in which they are hidden.",
        numOfPages: 176,
        authors: ['Ray Bradbury']
      }
    ]
   }

   getBooks(): Observable<IBook[]> {
    return of(this.books);
   }

   getBook(isbn: string): IBook {
    for (let book of this.books) {
      if (book.isbn === isbn) {
        return book;
      }
    }
    return {} as IBook;
   }
}
