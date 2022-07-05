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
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {  
    const listofSVGIcons = ['delete','question'];
  listofSVGIcons.forEach((svgIcon) => {
    this.iconRegistry.addSvgIcon(
      svgIcon,
      this.sanitizer.bypassSecurityTrustResourceUrl(`assets/${svgIcon}.svg`));
  })}
  ngOnInit(): void {
    // const listofSVGIcons = ['delete','predictive'];
    // listofSVGIcons.forEach((svgIcon) => {
    //   this.iconRegistry.addSvgIcon(
    //     svgIcon,
    //     this.sanitizer.bypassSecurityTrustResourceUrl(`assets/${svgIcon}.svg`));
    // });
  
}
}
