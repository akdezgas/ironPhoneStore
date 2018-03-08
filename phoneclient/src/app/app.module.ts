import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { PhonelistComponent } from './phonelist/phonelist.component';

import{ PhoneService } from './services/phone.service';

const routes = [
  {path:"phones", component:PhonelistComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PhonelistComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PhoneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
