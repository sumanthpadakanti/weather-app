import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-ref-variables',
  template: `
            <input #myInput type="text">
            <button (click)= "onClick(myInput.value)">Button</button><br>
            {{inputBoxVal}}
  `,
  styleUrls: ['./template-ref-variables.component.scss']
})
export class TemplateRefVariablesComponent implements OnInit {
  public inputBoxVal = "";
  constructor() { }

  ngOnInit() {
  }

  onClick(value) {
    this.inputBoxVal = value;

  }
}
