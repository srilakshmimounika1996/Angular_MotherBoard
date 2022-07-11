import { Component, EventEmitter, INJECTOR, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-ivy-questionnaire-parent',
  templateUrl: './ivy-questionnaire-parent.component.html',
  styleUrls: ['./ivy-questionnaire-parent.component.scss']
})
export class IvyQuestionnaireParentComponent implements OnInit {

  @Input() parentPanelClass: any;
  @Input() parentPanelHeaderClass: any;
  @Input() childPanelClass: any;
  @Input() childPanelHeaderClass: any;
  @Input() childPanelContentClass: any;
  @Input() uuid: any;
  @Input() actions: any;
  @Input() hooks: any;
  @Input() index: any;
  @Input() expanded: any;
  @Input() parentTaskPanelData: any;
  @Output() clearTaskPanel = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
    console.log(this.parentTaskPanelData);
  }
  onDeleteClick() {
    console.log(this.index, "index");

    this.parentTaskPanelData = {}
    this.clearTaskPanel.emit(this.index)
  }

}
