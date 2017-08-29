import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  winH=window.document.documentElement.clientHeight;
  navBgMaxPos = 200;
    currentNavBgOffset = 300;
    currentNavBgMaxPos = this.winH-this.currentNavBgOffset;
  constructor() { }

  ngOnInit() {
    this.resizeListener();
    this.scrollListener();
  }
  resizeListener():any{
     window.addEventListener("resize", ()=>{
       this.winH = window.document.documentElement.clientHeight;
       this.currentNavBgMaxPos = this.winH-this.currentNavBgOffset;
     });
      
  }
  scrollListener(){
     window.addEventListener("scroll", ()=>{
      let scrollY = window.scrollY;
      if(scrollY===0){
        document.getElementById('nav-container').style.backgroundColor = this.opacityInsert(0);
        document.getElementById('logo').style.backgroundColor = this.logoColorInsert(0);
        document.getElementById('home').style.backgroundColor = this.activeColorInsert(0);
      }
      else if(scrollY < this.navBgMaxPos){
        document.getElementById('nav-container').style.backgroundColor = this.opacityInsert(scrollY/this.navBgMaxPos);
      }
      else if(scrollY < this.currentNavBgMaxPos+this.currentNavBgOffset && scrollY > this.currentNavBgOffset){
        document.getElementById('logo').style.backgroundColor = this.logoColorInsert((scrollY-this.currentNavBgOffset)/(this.currentNavBgMaxPos));
        document.getElementById('home').style.backgroundColor = this.activeColorInsert((scrollY-this.currentNavBgOffset)/(this.currentNavBgMaxPos));
      }
      else if(scrollY > this.currentNavBgMaxPos+this.currentNavBgOffset){
        document.getElementById('logo').style.backgroundColor = this.logoColorInsert(1);
        document.getElementById('home').style.backgroundColor = this.activeColorInsert(1);
      }
       else if(scrollY > this.navBgMaxPos){
        document.getElementById('nav-container').style.backgroundColor = this.opacityInsert(1);
      }
    });
  }
  opacityInsert(opacity:number):string{
    return `rgba(5,5,5,${opacity})`;
  }
  logoColorInsert(opacity:number):string{
    return `rgba(237, 150, 2,${opacity})`;
  }
  activeColorInsert(opacity:number):string{
    return `rgba(4, 49, 119,${opacity})`;
  }
}
