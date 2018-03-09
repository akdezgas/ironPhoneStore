import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule} from '@angular/router';

import { HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { PhonelistComponent } from './phonelist/phonelist.component';
import { FormNewPhoneComponent } from './form-new-phone/form-new-phone.component';
import { SinglePhoneComponent } from './single-phone/single-phone.component';

import { PhoneService } from './services/phone.service';

const routes = [
  {path: 'phones', component: PhonelistComponent},
  {path: 'phones/new', component: FormNewPhoneComponent},
  {path: 'phones/:id', component: SinglePhoneComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    PhonelistComponent,
    FormNewPhoneComponent,
    SinglePhoneComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PhoneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
