import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway-binding',
  template: `
            <input [(ngModel)] = "inputBoxVal" type="text"><br>
            {{inputBoxVal}}
            `,
  styles: []
})
export class TwowayBindingComponent implements OnInit {
  public inputBoxVal = "";
  constructor() { }

  ngOnInit() {
  }

}
