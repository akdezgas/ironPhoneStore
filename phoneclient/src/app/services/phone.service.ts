import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class PhoneService {

baseURL = environment.baseURL + 'phone';

  constructor(private http: Http) { }

  getAllPhone() {
    return this.http.get(`${this.baseURL}/all`)
      .map(res => res.json());
  }

  sendNewPhone(phone) {
    return this.http.post(`${this.baseURL}/new`, phone)
      .map(res => res.json());
  }

  getSinglePhone(id) {
    return this.http.get(`${this.baseURL}/${id}`)
    .map(res => res.json());
  }
}
