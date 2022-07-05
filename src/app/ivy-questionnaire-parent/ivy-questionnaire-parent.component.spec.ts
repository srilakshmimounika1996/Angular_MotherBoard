import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IvyQuestionnaireParentComponent } from './ivy-questionnaire-parent.component';

describe('IvyQuestionnaireParentComponent', () => {
  let component: IvyQuestionnaireParentComponent;
  let fixture: ComponentFixture<IvyQuestionnaireParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IvyQuestionnaireParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IvyQuestionnaireParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
