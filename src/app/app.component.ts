import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'Angular-app';
  public dataToChild = "This is Parent Data to child component";
  public dataFromChild = "";
}
