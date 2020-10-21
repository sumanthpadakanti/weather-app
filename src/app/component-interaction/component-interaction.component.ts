import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component-interaction',
  template: `<div>
               {{parentDataToChild}}<br>
               <span>On Click of this button, data is sent from child component to parent component.</span><br>
               <button (click) = "onClick()">Send Data to Parent</button>
             </div>`,
  styleUrls: ['./component-interaction.component.scss']
})
export class ComponentInteractionComponent implements OnInit {
  @Input('parentData') public parentDataToChild;
  @Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  
  onClick() {
    this.childEvent.emit('This is the Data from Child Component');

  }

}
