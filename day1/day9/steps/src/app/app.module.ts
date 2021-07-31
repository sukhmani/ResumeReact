import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { First1Component } from './first1.component';
import { SecondComponent } from './second.component';
import { ThirdComponent } from './third.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    First1Component,
    SecondComponent,
    ThirdComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
