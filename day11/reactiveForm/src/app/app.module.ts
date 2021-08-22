import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { BatmanComponent } from './batman.component';
import { IronmanComponent } from './ironman.component';
import { SupermanComponent } from './superman.component';
import { SpidermanComponent } from './spiderman.component';
import { NotfoundComponent } from './notfound.component';
import { RouterModule, Routes } from '@angular/router';
 
 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BatmanComponent,
    IronmanComponent,
    SupermanComponent,
    SpidermanComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot([
      { path : '', component : HomeComponent },
      { path : 'batman', component : BatmanComponent },
      { path : 'superman', component : SupermanComponent },
      { path : 'ironman', component : IronmanComponent },
      { path : 'spiderman', component : SpidermanComponent },
      { path : 'hulk', component : NotfoundComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }