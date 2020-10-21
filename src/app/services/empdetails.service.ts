import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Empinterface } from "../interface/empinterface";
import { Observable, throwError, pipe } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class EmpdetailsService {
  // public empDetailsUrl = "./assets/data/employeeList.json";
  public empDetailsUrl = "https://jsonplaceholder.typicode.com/users";
  constructor(private _http: HttpClient) {}

  getEmployees(): Observable<Empinterface[]> {
    return this._http
      .get<Empinterface[]>(this.empDetailsUrl)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server Error");
  }
}
