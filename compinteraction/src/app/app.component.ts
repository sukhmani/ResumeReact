import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  /* template:  `{{ title }}
    <div *ngFor="let color of colors; index as i">
      <h2>{{ i }} {{ color }}</h2>
    </div> ` */
  styles: []
})
export class AppComponent {
  title = 'compinteraction';
  public name = 'abc';
  public colors = ['red', 'blue', 'green', 'yellow'];
}
