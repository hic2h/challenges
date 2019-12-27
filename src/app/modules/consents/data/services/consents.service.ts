import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {Consent} from '../schema/consent';
import {environment} from '../../../../../environments/environment';

const routes = {
  consents: `${environment.baseUrl}/consents`,
};

interface ConsentsResponse {
  page: number;
  count: number;
  records: Consent[];
}

@Injectable({
  providedIn: 'root'
})
export class ConsentsService {
  constructor(private http: HttpClient) { }

  /**
   * Fetch the consents from the backend by page and limit
   */
  public getConsents(page = 0, limit = 10): Observable<Consent[]> {
    return this.http.get<ConsentsResponse>(`${routes.consents}?_page=${page}&_limit=${limit}`)
      .pipe(
        map(result => result.records)
      );
  }

  /**
   * Persist a new consent in the backend
   */
  public addConsent(consent: Consent): Observable<Consent> {
    return this.http.post<Consent>(routes.consents, consent);
  }
}
