import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-ironman',
  template: `
  <div>
  <h1>Iroman</h1>
  <img src="assets/images/ironman.jpg" alt="Ironman">
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
export class IronmanComponent implements OnInit {
 
  constructor() { }
 
  ngOnInit(): void {
  }
 
}