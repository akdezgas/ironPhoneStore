import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../services/phone.service';

@Component({
  selector: 'app-phonelist',
  templateUrl: './phonelist.component.html',
  styleUrls: ['./phonelist.component.css']
})
export class PhonelistComponent implements OnInit {
phoneList:Array<Object>
  constructor(private phoneS:PhoneService) { }
  ngOnInit() {
    this.phoneS.getAllPhone()
      .subscribe(respuesta=>this.phoneList=respuesta)
  }

}
