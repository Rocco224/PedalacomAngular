import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  _id: string = '';

  constructor(private http: HttpClient) { }

  setTokenHttpHeader() {
    const token = localStorage.getItem("Token");
    
    const headerOptions = new HttpHeaders({
      'Content-Type': 'application/json',
      'Response-Type': 'text',
      'Authorization': `Bearer ${token}`
    });

    return headerOptions;
  }

  ReadData(path: string): Observable<any> {
    return this.http.get(path, {
      headers: this.setTokenHttpHeader(),
      observe: 'response',
    });
  }

  ReadDataById(path: string): Observable<any> {
    return this.http.get(path);
  }

  CreateData(path: string, data: any) {
    return this.http.post(path, data, {
      headers: this.setTokenHttpHeader(),
      observe: 'response',
    });
  }

  EditData(path: string, data: any) {
    return this.http.put(path, data, {
      headers: this.setTokenHttpHeader(),
      observe: 'response',
    });
  }

  DeleteData(path: string) {
    return this.http.delete(path, {
      headers: this.setTokenHttpHeader(),
      observe: 'response',
    });
  }
}