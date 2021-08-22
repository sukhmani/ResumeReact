import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-batman',
  template: `
   <div>
     <h1>Batman</h1>
     <img src="assets/images/batman.jpg" alt="Batman">
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
export class BatmanComponent implements OnInit {
 
  constructor() { }
 
  ngOnInit(): void {
  }
 
}