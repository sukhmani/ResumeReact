import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>{{ title }}</h1>
  <h2>{{ 5*6 }}</h2>
  <h2>{{ saymessage() }}</h2>
  <h2 [innerHTML]="title"></h2>
  <h2 [innerText]="title"></h2>
  <h2 [textContent]="title"></h2>
  <h2 bind-innerHTML="title"></h2>
  <input type="button" disabled="disabled" [value]="btnMsg">
  <input type="button" disabled="disabled" bind-value="btnMsg">
  <input type="button" disabled="disabled" bind-value="btnMsg">
  <input [type]="inputType">
  <input type="button" [disabled]="agree" bind-value="btnMsg">
 
  
<button (click)="clickHandler()">Click Me</button>
  <button on-click="clickHandler()">Click Me</button>
  <button productId="1001" (click)="evtHandler($event)">Click To get Event</button>
  <button (click)="boxer.setAttribute('class','box greenbox')">Change Color</button>
  <hr>
  <div #boxer class="box" [class]="'orangebox'">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus labore, doloremque iusto dolor culpa earum placeat sequi provident! Iste nostrum nemo tenetur doloremque inventore similique perspiciatis vel quis quo error.
  <h1></h1>
    </div>

`,
styles : [`
    .box{
      width:200px; 
      margin : auto; 
      padding : 10px;
      border : 2px dotted silver;
    }
    .orangebox{
      background-color:orange; 
    }
    .greenbox{
      background-color:green; 
    }
  `]

  
  
})
export class AppComponent {
  title = 'Welcome to your life ';
  btnMsg = "Click Me Again";
  inputType = "date";
  agree = false;
  saymessage(){
    return "There's no turning back"
  }
  clickHandler(){
    alert("you clicked me");
  }
  evtHandler(evt:any){
    alert("you clicked" + evt.target.getAttribute('productId'));
  }

}
