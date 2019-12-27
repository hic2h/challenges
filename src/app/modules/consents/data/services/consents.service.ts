import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {Consent} from '../schema/consent';
import {HttpService} from '../../../../core/http.service';

const routes = {
  consents: '/consents',
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
  constructor(private http: HttpService) { }

  /**
   * Fetch the consents from the backend by page and limit
   */
  public getConsents(page = 0, limit = 10): Observable<Consent[]> {
    return this.http.get(routes.consents, page, limit)
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
