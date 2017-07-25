import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms'

import { MaterializeModule } from 'angular2-materialize';

import { Routing } from './app.routes';

import { AppComponent } from './app.component';
import { ListsComponent } from './lists/lists.component';
import { ListDetailsComponent } from './lists/list-details/list-details.component';

import { ListService } from './lists/lists.service'

@NgModule({
  declarations: [
    AppComponent,
    ListsComponent,
    ListDetailsComponent,
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    Routing,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [
    ListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
