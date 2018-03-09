import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../services/phone.service';
import { Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-form-new-phone',
  templateUrl: './form-new-phone.component.html',
  styleUrls: ['./form-new-phone.component.css']
})
export class FormNewPhoneComponent implements OnInit {
  //por defecto hace una llamada post a nuestro back-end
  uploader: FileUploader = new FileUploader({
    url: `http://localhost:3000/phone/new`
  });


  constructor(private phoneS: PhoneService, private route: Router) { }

  ngOnInit() {
  }
  submitForm(newForm) {
    //form es un objeto interno de la instancia FileUploader
    this.uploader.onBuildItemForm = (item, form) => {
      form.append('name', newForm.value.name);
      form.append('brand', newForm.value.brand);
    };
    this.uploader.uploadAll();
    this.uploader.onCompleteItem = () => this.route.navigate(['phones']);
  }

}
