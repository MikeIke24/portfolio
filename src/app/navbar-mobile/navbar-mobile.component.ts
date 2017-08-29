import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-navbar-mobile',
  templateUrl: './navbar-mobile.component.html',
  styleUrls: ['./navbar-mobile.component.scss']
})
export class NavbarMobileComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    const sidebar = new Sidebar('open-sidebar', 'close-sidebar', 'right-sidebar');
  }

}
class Sidebar {
  openBtnId: string;
  sidebarId: string;

  openSidebar(btnId, sidebarId) {
    document.getElementById(btnId).addEventListener('click', function () {
      document.getElementById(sidebarId).style.transition = "all 1s";
      document.getElementById(sidebarId).style.right = "0";
    });
  }
  closeSidebar(btnId, sidebarId) {
    document.getElementById(btnId).addEventListener('click', function () {
      document.getElementById(sidebarId).style.transition = "all 1s";
      document.getElementById(sidebarId).style.right = "-20rem";
    });
  }
  constructor(openBtnId: string, closeBtnId: string, sidebarId: string) {
    this.openBtnId = openBtnId;
    this.sidebarId = sidebarId;
    this.openSidebar(openBtnId, sidebarId);
    this.closeSidebar(closeBtnId, sidebarId);
  }
}
