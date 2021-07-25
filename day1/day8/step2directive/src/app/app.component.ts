import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <input type="checkbox" (change)= "agree = !agree" />
  <div *ngIf="agree">
  <h2> Terms and conditions </h2>
  <p>
  paragraph text
  </p>
  </div>
  <ul>
  <li>{{avengers[0]}}</li>
  <li>{{avengers[1]}}</li>
  <li>{{avengers[2]}}</li>
  <li>{{avengers[3]}}</li>
  <li>{{avengers[4]}}</li>
  </ul>
  <ol>
  <li *ngFor="let hero of avengers; index as idx; odd as od; even as ev; first as fst; last as lst">
  {{ hero }}</li>
  <span></span>
  </ol>

  <input min="1" max="10"  #pow type="range" (change)="power = pow.value" /> 
  <div [ngSwitch]="power">
    <p *ngSwitchCase="10" >Unbeatable {{ power }}</p>
    <p *ngSwitchCase="9" >Strong {{ power }}</p>
    <p *ngSwitchCase="8" >Recovered {{ power }}</p>
    <p *ngSwitchCase="7" >Needs rest {{ power }}</p>
    <p *ngSwitchCase="6" >Weak {{ power }}</p>
    <p *ngSwitchDefault >Not ready to fight {{ power }}</p>
  </div>


  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'step2directive';
  agree = false;
  avengers = ["Ironman", "Antman", "Wonder Women", "Scarlet Witch", "Black Panther", "Hulk", "Falcon", "Thor"]
power = "6";
}
