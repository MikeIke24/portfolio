import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  winH = window.document.documentElement.clientHeight;
  navBgMaxPos = 200;
  currentNavBgOffset = 300;
  currentNavBgMaxPos = this.winH - this.currentNavBgOffset;
  constructor() {}

  ngOnInit() {
    this.scrollFunction();
    this.resizeListener();
    this.scrollListener();
  }
  resizeListener(): any {
    window.addEventListener("resize", () => {
      this.winH = window.document.documentElement.clientHeight;
      this.currentNavBgMaxPos = this.winH - this.currentNavBgOffset;
    });

  }
  scrollListener() {
    window.addEventListener("scroll", () => {
      this.scrollFunction();
    });
  }
  scrollFunction() {
    if (scrollY === 0) {
      document.getElementById('nav-container').classList.remove('nav-container-after');
    }
    else {
      document.getElementById('nav-container').classList.add('nav-container-after');
    }
  }
}
