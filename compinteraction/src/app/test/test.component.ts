import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `{{parentData}}`,
  styles: []
})
export class TestComponent implements OnInit {

@Input() public parentData: any;

  constructor() { }

  ngOnInit(): void {
  }

}
