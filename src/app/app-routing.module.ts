import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PropertyBindingComponent } from "./property-binding/property-binding.component";
import { StyleBindingComponent } from "./style-binding/style-binding.component";
import { EventBindingComponent } from "./event-binding/event-binding.component";
import { ClassBindingComponent } from "./class-binding/class-binding.component";
import { TwowayBindingComponent } from "./twoway-binding/twoway-binding.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { DepartmentlistComponent } from "./departmentlist/departmentlist.component";
import { DepartmentDetailComponent } from "./department-detail/department-detail.component";
import { DepartmentOverviewComponent } from "./department-overview/department-overview.component";
import { DepartmentContactComponent } from "./department-contact/department-contact.component";
import { LoginComponent } from "./login/login.component";
import { SignUpComponent } from "./sign-up/sign-up.component";

const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch:'full'},
  { path: "login", component: LoginComponent },
  { path: "sign-up", component: SignUpComponent },
  //  using Component to redirect defult route
  // {path:'', component: PropertyBindingComponent}
  // pathMatch:'full' check if the Url(afvd/bsds/) is empty string(Ex:localhost:4200)
  // { path: "style-binding", component: StyleBindingComponent },
  // { path: "event-binding", component: EventBindingComponent },
  // { path: "class-binding", component: ClassBindingComponent },
  // { path: "twoway-binding", component: TwowayBindingComponent },
  // { path: "department-list", component: DepartmentlistComponent },
  // {
  //   path: "department-list/:id",
  //   component: DepartmentDetailComponent,
  //   children: [
  //     { path: "department-overview", component: DepartmentOverviewComponent },
  //     { path: "department-contact", component: DepartmentContactComponent }
  //   ]
  // },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
