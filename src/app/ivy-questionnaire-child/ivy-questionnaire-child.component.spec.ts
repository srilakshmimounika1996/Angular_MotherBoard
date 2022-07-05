import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IvyQuestionnaireChildComponent } from './ivy-questionnaire-child.component';

describe('IvyQuestionnaireChildComponent', () => {
  let component: IvyQuestionnaireChildComponent;
  let fixture: ComponentFixture<IvyQuestionnaireChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IvyQuestionnaireChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IvyQuestionnaireChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
