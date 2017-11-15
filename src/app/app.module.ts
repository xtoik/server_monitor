import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Input, Injectable } from '@angular/core';
import { MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { ServicesDataService } from './services-data.service'
import { AppComponent } from './app.component';
import { ServicesListComponent } from './services-list.component';
import { ServiceComponent } from './service.component';
import { CollapsibleListComponent } from './collapsible-list/collapsible-list.component'
import { CollapsibleListItemComponent } from './collapsible-list/collapsible-list-item.component'
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    ServicesListComponent,
    ServiceComponent,
    CollapsibleListComponent,
    CollapsibleListItemComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatIconModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [
    ServicesDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
