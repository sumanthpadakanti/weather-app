import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateRefVariablesComponent } from './template-ref-variables.component';

describe('TemplateRefVariablesComponent', () => {
  let component: TemplateRefVariablesComponent;
  let fixture: ComponentFixture<TemplateRefVariablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateRefVariablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateRefVariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
