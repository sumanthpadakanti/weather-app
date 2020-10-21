import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-overview',
  template: `<div>
              <p>Department overview Component.</p>
             </div>`,
  styleUrls: ['./department-overview.component.scss']
})
export class DepartmentOverviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
