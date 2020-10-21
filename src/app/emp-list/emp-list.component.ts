import { Component, OnInit } from "@angular/core";
import { EmpdetailsService } from "../services/empdetails.service";

@Component({
  selector: "app-emp-list",
  template: `
    <div>
      <div>
        <h3>{{ errorMsg }}</h3>
        <table class="table">
          <tr>
            <th>Index</th>
            <th>Emp Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Title</th>
          </tr>
          <tbody>
            <tr *ngFor="let retriveEmpDetail of retriveEmpDetails; index as i">
              <td>{{ i }}</td>
              <td>{{ retriveEmpDetail.id }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: [
    `
      .table {
        border-collapse: collapse;
      }
      table,
      th,
      tr,
      td {
        border: 1px solid black;
      }
      tbody tr:nth-child(even) {
        background-color: #ccc;
      }
    `
  ]
})
export class EmpListComponent implements OnInit {
  retriveEmpDetails = [];
  errorMsg = [];
  constructor(private _empList: EmpdetailsService) {}

  ngOnInit() {
    this._empList
      .getEmployees()
      .subscribe(
        data => (this.retriveEmpDetails = data),
        error => (this.errorMsg = error),
        () => console.log("Its Completed")
      );
    console.log(this.errorMsg);
  }
}
