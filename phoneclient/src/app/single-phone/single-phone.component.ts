import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhoneService } from '../services/phone.service';

@Component({
  selector: 'app-single-phone',
  templateUrl: './single-phone.component.html',
  styleUrls: ['./single-phone.component.css']
})
export class SinglePhoneComponent implements OnInit {
single: any;
  constructor(private activateRouter: ActivatedRoute, private phoneS: PhoneService ) { }

  ngOnInit() {
    this.activateRouter.params.subscribe(params => {
      this.phoneS.getSinglePhone(params['id'])
        .subscribe(singlePhone => this.single = singlePhone);
    });
  }

}
