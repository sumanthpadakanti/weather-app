import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  template: `
             <div>
                {{"ConvertThistoLowerCase" | lowercase}}<br>
                {{"ConvertThistoUpperCase" | uppercase}}<br>
                {{"Convert This to Title Case" | titlecase}}<br>
                {{"This is about slicing" | slice:3}}<br>
                {{"This is about slicing" | slice:3:7}}<br>
                </div>
             <div>
                {{3242.34 | number:'1.2-3'}}<br>
                {{232.1 | number:'2.2-3'}}<br>
                {{23.332 | number:'4.1-3'}}<br>
                {{100 | currency}}<br>
                {{200 | currency:'EUR'}}<br>
                {{50 | percent}}<br>
             </div>
             <div>
                {{person | json}}<br>
                {{todayDate | date:'short'}}<br>
                {{todayDate | date:'shortDate'}}<br>
                {{todayDate | date:'shortTime'}}<br>
                {{todayDate | date:'mediumDate'}}<br>
                {{todayDate | date:'mediumTime'}}<br>
                {{todayDate | date:'longDate'}}<br>
                {{todayDate | date:'longTime'}}<br>
             </div>
             `,
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
  public todayDate = new Date();
  public person = {
    firstName: "John",
    lastName: "Doe",
    age: 34
  }
  constructor() { }

  ngOnInit() {
  }

}
