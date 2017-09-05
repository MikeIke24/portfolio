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
    let scrollY = window.scrollY;

    if (scrollY === 0) {
      document.getElementById('nav-container').style.backgroundColor = this.opacityInsert(0);
      //this.shadowLoop('nav-container',0);
      document.getElementById('logo').style.backgroundColor = this.logoColorInsert(0);
      document.getElementById('home').style.backgroundColor = this.activeColorInsert(0);
      document.getElementById('home').style.backgroundColor = this.activeColorInsert(0);
    } else if (scrollY < this.navBgMaxPos) {
      document.getElementById('nav-container').style.backgroundColor = this.opacityInsert(scrollY / this.navBgMaxPos);
      //this.shadowLoop('nav-container',scrollY / this.navBgMaxPos);
    } else if (scrollY < this.currentNavBgMaxPos + this.currentNavBgOffset && scrollY > this.currentNavBgOffset) {
      document.getElementById('logo').style.backgroundColor = this.logoColorInsert((scrollY - this.currentNavBgOffset) / (this.currentNavBgMaxPos));
      document.getElementById('home').style.backgroundColor = this.activeColorInsert((scrollY - this.currentNavBgOffset) / (this.currentNavBgMaxPos));
    } else if (scrollY > this.currentNavBgMaxPos + this.currentNavBgOffset) {
      document.getElementById('logo').style.backgroundColor = this.logoColorInsert(1);
      document.getElementById('home').style.backgroundColor = this.activeColorInsert(1);
    }
    if (scrollY > this.navBgMaxPos) {
      //this.shadowLoop('nav-container',1);
      document.getElementById('nav-container').style.backgroundColor = this.opacityInsert(1);
    }
  }
  shadowLoop(id:string,opacity:number){
      //document.getElementById(id).style.WebkitBoxShadow = this.opacityInsert(1);
      //document.getElementById(id).style.mozBoxShadow = this.opacityInsert(1);
      document.getElementById(id).style.boxShadow = this.shadowInsert(opacity);
  }
  shadowInsert(opacity: number) {
          /*[`-webkit-box-shadow: inset 0px -1rem 1rem -.3rem rgba(0,0,0,${opacity})`,
`-moz-box-shadow: inset 0px -1.5rem 2rem -.3rem rgba(0,0,0,${opacity})`,*/
return `inset 0px -1.5rem 2rem -.3rem rgba(0,0,0,${opacity})`;
  }
  opacityInsert(opacity: number): string {
    return `rgba(5,5,5,${opacity})`;
  }
  logoColorInsert(opacity: number): string {
    return `rgba(230, 230, 230,${opacity})`;
  }
  activeColorInsert(opacity: number): string {
    return `rgba(4, 49, 119,${opacity})`;
  }
}
