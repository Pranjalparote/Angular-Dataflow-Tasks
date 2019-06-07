import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  template: `<h2>Welcome{{name}}</h2>
  <input [(ngModel)]="name" type="text">
  {{name}}  `,
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
public name="";
  constructor() { }

  ngOnInit() {
  }
}
