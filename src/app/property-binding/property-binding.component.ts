import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-property-binding",
  template: `
    <div>
      <input [id]="inputId" type="text" value="randomTestValue" /><br />
      <label>Disabled Input Box example: </label
      ><input [disabled]="isDisabled" type="text" value="boxIsDisabled" /><br />

      <h3>
        Bind declaration<br />
        1. [disabled]="isDisabled"<br />
        2. Alternative bind syntax [bind-randomName]<br />
        bind-disabled="isDisabled":
      </h3>
      <input type="text" value="bindRandomName" />
    </div>
    <div>{{ inputClass }}</div>
  `,
  styleUrls: ["./property-binding.component.scss"]
})
export class PropertyBindingComponent implements OnInit {
  public inputId = "first-id";
  public isDisabled = false;
  public isEnabled = true;

  constructor() {}

  ngOnInit() {}
}
