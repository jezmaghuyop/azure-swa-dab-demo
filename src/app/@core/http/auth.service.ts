import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Response, Product } from '../models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly authInfoUrl = '/.auth/me';

  getAuthInfo(): Observable<any> {
    return this.http.get(this.authInfoUrl);
  }
}
