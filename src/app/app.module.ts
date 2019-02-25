import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { DisplaycompComponent } from './displaycomp/displaycomp.component'

@NgModule({
  declarations: [
    AppComponent,
    DisplaycompComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
