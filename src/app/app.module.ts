import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Input } from '@angular/core';
import { MatIconModule } from '@angular/material';

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
    BrowserModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
