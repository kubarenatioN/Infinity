import { HttpClient, HttpEvent, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, filter, Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(
    private http: HttpClient,
  ) { }

  public sendRequest<T>(payload: any): Observable<HttpResponse<T>> {
    const { method, url, params } = payload
    let { body } = payload
    if (!body) {
      body = null
    }
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    })
    const req = new HttpRequest(method, url, body, {
      headers,
      responseType: 'json',
      params,
    })
    return this.http.request<T>(req)
      .pipe(
        filter((e): e is HttpResponse<T> => 
          e instanceof HttpResponse),
        catchError(err => throwError(err)),
      )
  }
}
