import { Component, ViewChild, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from './shared.service';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-fitness-app';

  mode = "side";
  sidenav_opened = "opened";

  @ViewChild('sidenav') sidenav;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
      if (event.target.innerWidth < 600) {
          this.sidenav.close();
          this.mode = "over"
      }
      else {
        this.sidenav.open();
        this.mode = "side";
      }
  }

  constructor(
    private router: Router,
    public sharedService:SharedService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer)
    {
      this.matIconRegistry.addSvgIcon(
        "menu",
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/menu-24px.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "account_box",
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/account_box-24px.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "create",
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/create-24px.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "article",
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/article-24px.svg")
      );

    }

  ngOnInit() { }

}
