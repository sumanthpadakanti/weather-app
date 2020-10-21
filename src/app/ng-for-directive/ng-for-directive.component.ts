import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-directive',
  template: `
             <div>
               <div>
                 <table class="table">                 
                      <tr>
                         <th>Index</th>
                         <th>Even</th>
                         <th>Odd</th>
                         <th>color</th>
                      </tr>             
                      <tbody>
                       <tr *ngFor = "let color of colors; index as i; even as e; odd as o">
                        <td>{{i}}</td>
                        <td>{{e}}</td>
                        <td>{{o}}</td>
                        <td>{{color}}</td>
                       </tr>
                   </tbody>
                 </table>
             </div>
            `,
  styles: [`
          .table {
            border-collapse: collapse;
          }          
          table, th, tr, td {
            border: 1px solid black;
          }
          tbody tr:nth-child(even) {
            background-color: #ccc;
          }
          `]
})
export class NgForDirectiveComponent implements OnInit {
  public colors = ["red", "green", "yellow", "pink"];
  constructor() { }

  ngOnInit() {
  }

}
