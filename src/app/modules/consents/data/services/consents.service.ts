import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Consent} from "../schema/consent";
import {environment} from "../../../../../environments/environment";

const routes = {
  consents: `${environment.baseUrl}/consents`,
};

@Injectable({
  providedIn: 'root'
})
export class ConsentsService {
  constructor(private http: HttpClient) { }

  public getConsents(page = 0, limit = 10): Observable<Consent[]> {
    return this.http.get<Consent[]>(`${routes.consents}?page=${page}&limit=${limit}`);
  }

  public addConsent(consent: Consent): Observable<Consent> {
    return this.http.post<Consent>(routes.consents, consent);
  }
}
