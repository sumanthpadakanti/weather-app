import { Component, OnInit } from '@angular/core';
import {Router, ParamMap, Route, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-departmentlist',
  template: `<div>
                <h3>This is Department List</h3>
                <ul class="items">
                  <li [class.selected]="onSelected(department)" (click)= "deptDetails(department)" *ngFor="let department of departmentList; index as i">
                    <span class="badge">{{i+1}}.</span> {{department.name}}
                  </li>
                </ul>
             </div>`,
  styleUrls: ['./departmentlist.component.scss']
})
export class DepartmentlistComponent implements OnInit {
  public deptId;
  public departmentList = [ {id:1, name:"Sales"}, 
                            {id:2, name:"Marketing"}, 
                            {id:3, name:"Recruting"}, 
                            {id:4, name:"Develoment"}, 
                            {id:5, name:"Finance"}
                          ];

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.deptId = id;
    })
  }

  deptDetails(department) {
      //this.router.navigate(['/department', department.id]);  //absolute path
      this.router.navigate([department.id], {relativeTo:this.route}) //relative path. always use relative path
  }

  onSelected(department) {
    return this.deptId === department.id;
  }



}
