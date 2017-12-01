import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

}
setTimeout(function() {
  let loadingPage = document.getElementById('landing-screen')
  loadingPage.style.transition = 'all 1s ease-out';
  setTimeout(function() {
    loadingPage.style.opacity = '0';
    setTimeout(function(){
      loadingPage.parentNode.removeChild(loadingPage);
    },1000)
  }, 700);
}, randomTime(1000,1000));

function randomTime(min:number,max:number):number{
  return Math.floor((Math.random() * max) + min);
}