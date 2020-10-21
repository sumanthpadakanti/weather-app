import { Component, OnInit } from '@angular/core';
import { InterpolationConfig } from '@angular/compiler';

@Component({
  selector: 'app-style-binding',
  template: `<div>
                <p>1.[style.color] = "'orange'"</p>
                <p [style.color] = "'orange'">Orange text</p>
                <p>2.[style.color] = "isOrange ? 'orange' : 'green'"</p>               
                <p [style.color] = "isOrange ? 'orange' : 'green'">This color is displayed based on ternary operation</p>
                <p>3.[ngStyle] = "styleObject"</p>
                <p [ngStyle] = "styleObject">This styles are displayed based from styleObject</p>

             </div>`,
  styles: [ ]
})
export class StyleBindingComponent implements OnInit {
 public isOrange = false;
 public styleObject = {
   "fontStyle" : "italic",
   "fontWeight" : 700,
   "fontColor" : "blue"
 }

  constructor() { }

  ngOnInit() {
  }

}
