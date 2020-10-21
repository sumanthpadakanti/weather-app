import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
             <p>Sample event binding </p>
             <button (click) = "onClick()">Button</button><br>
             {{buttonMsg1}}
             <p>Sample event binding without the method </p>
             <button (click) = "buttonMsg2='event without the click method'">Button</button><br>
             {{buttonMsg2}}
             `,
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {
  buttonMsg1 = "";
  buttonMsg2 = "";
  constructor() { }

  ngOnInit() {
  }
   
   onClick() {
    this.buttonMsg1 = "Button clicked";
  }

}
