import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IvyMbBodyPageComponent } from './ivy-mbbody-page.component';

describe('IvyMbBodyPageComponent', () => {
  let component: IvyMbBodyPageComponent;
  let fixture: ComponentFixture<IvyMbBodyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IvyMbBodyPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IvyMbBodyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
