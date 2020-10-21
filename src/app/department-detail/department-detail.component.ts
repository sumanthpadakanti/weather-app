import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `<div>
               <span>This is Department with id = {{deptId}}</span><br>
               <button (click)="deptOverview()">Dept Overview</button><span></span> <button (click)="deptContact()">Dept Contact</button><br>
               <router-outlet></router-outlet>
               <button (click)="previousDept()">Previous</button><span></span> <button (click)="nextDept()">Next</button><br>
               <button (click)="back()">Back</button>
             </div>`,
  styleUrls: ['./department-detail.component.scss']
})
export class DepartmentDetailComponent implements OnInit {
  public deptId;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.deptId = id;
    })
  }
  previousDept() {
   let previousDept = this.deptId -1;
   if(previousDept < 1) {
     return previousDept = 1;
   }
   //this.router.navigate(['/department', previousDept]); //absolute path
   this.router.navigate([previousDept], {relativeTo:this.route}); //relative path. always use relative path
  }
  nextDept() {
    let nextDept = this.deptId + 1;
    if(nextDept > 4) {
      return nextDept = 4;
    }
    //this.router.navigate(['/department', nextDept]); //absolute path
    this.router.navigate([nextDept], {relativeTo:this.route}); //relative path. always use relative path

  }
  back() {
     //this.router.navigate(['/department-list', {id: this.deptId}]); //absolute path
     this.router.navigate(['../',  {id: this.deptId}], {relativeTo:this.route}); //relative path. always use relative path
  }

  deptOverview() {
    this.router.navigate(['department-overview'], {relativeTo:this.route});
  }

  deptContact() {
    this.router.navigate(['department-contact'], {relativeTo:this.route});
  }
}
