import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'motherboard_page';
  bcnValue: any;
  typeSelected: string;
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    this.typeSelected = 'ball-spin-clockwise';
    const listofSVGIcons = ['delete', 'question'];
    listofSVGIcons.forEach((svgIcon) => {
      this.iconRegistry.addSvgIcon(
        svgIcon,
        this.sanitizer.bypassSecurityTrustResourceUrl(`assets/${svgIcon}.svg`));
    })
  }
  ngOnInit(): void {

  }
  unitData(obj) {
    this.bcnValue = obj.ITEM_BCN
  }
}
