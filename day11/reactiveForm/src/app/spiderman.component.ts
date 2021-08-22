import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-spiderman',
  template: `
  <div>
  <h1>Spiderman</h1>
  <img src="assets/images/spiderman.jpg" alt="Spiderman">
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
export class SpidermanComponent implements OnInit {
 
  constructor() { }
 
  ngOnInit(): void {
  }
 
}