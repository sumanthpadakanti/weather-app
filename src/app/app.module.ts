import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MatNativeDateModule} from '@angular/material/core';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignUpComponent } from './sign-up/sign-up.component';
// import { PropertyBindingComponent } from "./property-binding/property-binding.component";
// import { ClassBindingComponent } from "./class-binding/class-binding.component";
// import { StyleBindingComponent } from "./style-binding/style-binding.component";
// import { EventBindingComponent } from "./event-binding/event-binding.component";
// import { TemplateRefVariablesComponent } from "./template-ref-variables/template-ref-variables.component";
// import { TwowayBindingComponent } from "./twoway-binding/twoway-binding.component";
// import { NgIfDirectiveComponent } from "./ng-if-directive/ng-if-directive.component";
// import { NgSwitchDirectiveComponent } from "./ng-switch-directive/ng-switch-directive.component";
// import { NgForDirectiveComponent } from "./ng-for-directive/ng-for-directive.component";
// import { ComponentInteractionComponent } from "./component-interaction/component-interaction.component";
// import { PipesComponent } from "./pipes/pipes.component";
// import { EmpdetailsService } from "./services/empdetails.service";
// import { EmpListComponent } from "./emp-list/emp-list.component";
// import { DepartmentlistComponent } from "./departmentlist/departmentlist.component";
// import { DepartmentDetailComponent } from "./department-detail/department-detail.component";
// import { DepartmentOverviewComponent } from "./department-overview/department-overview.component";
// import { DepartmentContactComponent } from "./department-contact/department-contact.component";


@NgModule({
  declarations: [
    AppComponent,
    // PropertyBindingComponent,
    // ClassBindingComponent,
    // StyleBindingComponent,
    // EventBindingComponent,
    // TemplateRefVariablesComponent,
    // TwowayBindingComponent,
    // NgIfDirectiveComponent,
    // NgSwitchDirectiveComponent,
    // NgForDirectiveComponent,
    // ComponentInteractionComponent,
    // PipesComponent,
    // EmpListComponent,
    PageNotFoundComponent,
    // DepartmentlistComponent,
    // DepartmentDetailComponent,
    // DepartmentOverviewComponent,
    // DepartmentContactComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, BrowserAnimationsModule],
  // providers: [EmpdetailsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
