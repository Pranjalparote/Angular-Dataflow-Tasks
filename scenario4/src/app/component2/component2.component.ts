import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-component2',
  template: `
  <h2> {{"Hello " + parentData }}</h2>
  <button (click)= "fireEvent()">send event</button>
  `,
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  @Input() public parentData;
  @Output()  public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
fireEvent() {
  this.childEvent.emit('hey pranjal');
}
}

