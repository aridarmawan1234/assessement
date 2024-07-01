import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpRequest,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Item, Comment, employee } from '../model/item';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  baseurl: string = 'assets/data-dummy.json'

  constructor(private http: HttpClient,) { }

  getTopStory() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      accept: 'application/json',
    });
    let options = { headers: headers };
    return this.http.get(this.baseurl +'topstories.json?print=pretty', options);
  }

  getItemStory(itemId: number):Observable<Item> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      accept: 'application/json',
    });
    let options = { headers: headers };
    return this.http.get<Item>(this.baseurl +`item/${itemId}.json?print=pretty&descendants=30`, options);
  }

  getCommentById(commenId: number):Observable<Comment> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      accept: 'application/json',
    });
    let options = { headers: headers };
    return this.http.get<Comment>(this.baseurl +`item/${commenId}.json?print=pretty&descendants=30`, options);
  }

  getData(): Observable<any> {
    return this.http.get<Array<employee>>(this.baseurl);
  }

}
