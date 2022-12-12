/**
 * Title: book.interface.ts
 * Author: Professor Krasso
 * Date: 20 November 2022
 * Modified by: Patrick Wolff
 * Description: Book interface object
 */

export interface IBook {
  isbn: string;
  title: string;
  authors: Array<string>
  description: string;
  numOfPages: number;
}
