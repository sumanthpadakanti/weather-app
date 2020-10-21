import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  template: `<div>
               <p>1. [class]="orangeText"</p>
               <p [class]="orangeText">This is orange text.</p>
               <p>2. [class.blue-text] = "blueText" other way of calling class in template</p>
               <p [class.blue-text] = "blueText">This is blue text.</p>
               <p>3. [ngClass] = "classObject" third way of defining class</p>
               <p [ngClass] = "classObject">This is style is from class Object.</p>  
             </div> `,
  styles: [`
       .orange-text {
         color: orange
       }
       .blue-text {
        color: blue
      }
      .green-text {
        color: green
      }  
         `]
})
export class ClassBindingComponent implements OnInit {

  public orangeText = "orange-text";
  public blueText = "true";
  public classObject = {
    "orange-text": false,
    "blue-text": false,
    "green-text": true
  };
  constructor() { }

  ngOnInit() {
  }

}
