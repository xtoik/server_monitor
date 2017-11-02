import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Input } from '@angular/core';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
