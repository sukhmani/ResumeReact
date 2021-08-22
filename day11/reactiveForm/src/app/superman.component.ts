import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-superman',
  template: `
  <div>
  <h1>Superman</h1>
  <img src="assets/images/superman.jpg" alt="Superman">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident exercitationem enim magni, architecto voluptates vero sequi in quae natus non ad iusto nisi nobis quidem consequatur nam deleniti eligendi id!
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident exercitationem enim magni, architecto voluptates vero sequi in quae natus non ad iusto nisi nobis quidem consequatur nam deleniti eligendi id!
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident exercitationem enim magni, architecto voluptates vero sequi in quae natus non ad iusto nisi nobis quidem consequatur nam deleniti eligendi id!
  </p>
</div>
  `,
  styles: [
  ]
})
export class SupermanComponent implements OnInit {
 
  constructor() { }
 
  ngOnInit(): void {
  }
 
}