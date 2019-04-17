import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TesthestLibraryModule } from 'testhest-library';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TesthestLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
