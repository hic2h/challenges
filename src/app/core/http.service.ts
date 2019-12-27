import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  private request(
    method: string,
    endpoint: string,
    body?: any
  ): Observable<any> {
    const url = `${environment.baseUrl}${endpoint}`;
    return this.http.request(method, url, {
      body
    });
  }

  /**
   * Map the response to match the specifications: "GET /consents: Returns a list of consents along with pagination data."
   */
  public get(endpoint: string, page: number, limit: number): Observable<any> {
    return this.request('GET', endpoint)
      .pipe(
        map(results => {
          /**
           * Reversed the list to display the last created consents first
           * TODO: let the server handle the pagination
           */
          const records = results.reverse().slice(0, limit);
          return {records, page, limit};
        })
      );
  }

  public post<T>(endpoint: string, body: T): Observable<any> {
    return this.request('POST', endpoint, body);
  }
}
