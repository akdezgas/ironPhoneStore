import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PhoneService {

  constructor(private http: Http) { }

  getAllPhone(){
    return this.http.get('http://localhost:3000/phone/all')
      .map(res => res.json());
  }
  sendNewPhone(phone){
    return this.http.post('http://localhost:3000/phone/new',phone)
      .map(res=> res.json())
  }
}
