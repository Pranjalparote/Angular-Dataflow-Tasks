import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-component1',
  template: `<div>
  <p>component1 working!</p>
  <input type="text" name="firstname">
  <button (click)= onClick()>Greeting</button>
  </div>`,
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
  title = 'scenario1';
  constructor() { }

  ngOnInit() {
  }
  onClick()
  {
    console.log('You completed scenario1');
  }


}
