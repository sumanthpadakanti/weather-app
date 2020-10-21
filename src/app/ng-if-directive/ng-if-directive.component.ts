import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-directive',
  template: `<div>
              <div *ngIf="!isBoolean1;"   else elseBlock1>
                This is true
              </div>            
              <div #elseBlock1>
                This is else div
              </div>
              <p>Below example syntax *ngIf="isBoolean2; then ifBlock2; else elseBlock2"</p>
              <div *ngIf="isBoolean2; then ifBlock2; else elseBlock2"></div>
              <ng-template #ifBlock2>
                <div>  
                  This is if Block
                </div>
              </ng-template>
              <ng-template #elseBlock2>              
                <div>
                  This is else block
                </div>
              </ng-template>
             </div>`,
  styles: [``]
})
export class NgIfDirectiveComponent implements OnInit {
  public isBoolean1 = true;
  public isBoolean2 = true;
  constructor() { }

  ngOnInit() {
  }

}
