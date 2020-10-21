import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch-directive',
  template: `
              <div>
               <input [(ngModel)] = "inputVal" type="text"><br>
               <div [ngSwitch] = "inputVal">
                 <div *ngSwitchCase="'John'">The value of input box is {{inputVal}}</div>
                 <div *ngSwitchCase="'Mark'">The value of input box is {{inputVal}}</div>
                 <div *ngSwitchCase="'William'">The value of input box is {{inputVal}}</div>
                 <div *ngSwitchDefault>The value of input box is {{inputVal == "" ? 'empty' : inputVal}}</div>
                 </div>
              </div> 
              `,
  styles: [``]
})
export class NgSwitchDirectiveComponent implements OnInit {
  public inputVal = "";
  constructor() { }

  ngOnInit() {
  }

}
