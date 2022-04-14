import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  httpURL = 'https://reqres.in/api/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getUser(id: any) {
    return this.http.get(this.httpURL + 'users/' + id);
  }


  listUsers() {
    return this.http.get(this.httpURL + 'users?page=2');
  }

  login(data: any) {
    console.log(JSON.stringify(data));
    return this.http.post(this.httpURL + "login", JSON.stringify(data), this.httpOptions);
  }
}
