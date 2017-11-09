import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Input, Injectable } from '@angular/core';
import { MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ServicesDataService } from './services-data.service'
import { AppComponent } from './app.component';
import { ServicesListComponent } from './services-list.component';
import { ServiceComponent } from './service.component';

@NgModule({
  declarations: [
    AppComponent,
    ServicesListComponent,
    ServiceComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatIconModule
  ],
  providers: [
    ServicesDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
