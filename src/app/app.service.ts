import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from './../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}
  /**
   * Api call to get gender by name.
   * @param {string} name: Name
   * @returns : gender api object
   */
  getGender(name: string): Observable<any> {
    const param = new HttpParams();
    param.append('name', name);
    console.log('this is service', this.baseUrl + '/get-gender');
    return this.http.get(this.baseUrl + '/get-gender?name=' + name);
  }
}
