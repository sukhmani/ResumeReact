import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<form action="#" method="get">
  <label for="username">User Name : </label>
  <input [(ngModel)] = "userName" type="text" name="uname" id="username"/>
  <br/>
  <label for="usermail">User eMail : </label>
  <input type="email" name="umail" id="usermail"/>
  <br/>
  <label for="userage">User Age : </label>
  <input type="number" name="uage" id="userage"/>
  <br/>
  <button>Login</button>
</form>
`,
  styles : [`
  label{ width : 100px; display : inline-block; padding: 5px;}
  button{ width : 100px; margin-left : 110px}
`]

})
export class AppComponent {
  title = 'form';
  userName = "";
  userMail = "";
  userAge = "";

}
