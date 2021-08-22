import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  template : `
  <a href="/">Home</a> | 
  <a href="/batman">Batman</a> | 
  <a href="/superman">Superman</a> | 
  <a href="/ironman">Ironman</a> | 
  <a href="/spiderman">Spiderman</a> | 
  <a href="/hulk">Hulk</a> | 
  <a href="/captain">Captain America</a> | 
  <hr>
  <router-outlet></router-outlet>
  `,
  styles: [`
  
  `]
})
export class AppComponent {
  title = 'steps';
}
 