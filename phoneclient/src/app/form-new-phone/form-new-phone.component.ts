import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../services/phone.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form-new-phone',
  templateUrl: './form-new-phone.component.html',
  styleUrls: ['./form-new-phone.component.css']
})
export class FormNewPhoneComponent implements OnInit {

  constructor(private phoneS: PhoneService, private route: Router) { }

  ngOnInit() {
  }
  submitForm(form){
    console.log(form.value);
    this.phoneS.sendNewPhone(form.value)
      .subscribe(respuesta => this.route.navigate(['phones']));
  }

}
