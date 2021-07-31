import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1> My main application</h1>
  <hr/>

 <app-first> <app-first>
 <p [ngClass] = "{box:boxReady, redBox : power >5}">
 Learn
 </p>
 <div>
  </div>
  
  `,
  styles: [`
  .box{
    width: 200px;
height: 200px;
border: 1px solid grey;
  }
  .redBox {
background-color: red
  }`]
})
export class AppComponent {
  title = 'step3-more-directives';
  power = 5;
  boxReady = true;
  message = "Welcome";
}
