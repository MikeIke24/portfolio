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
  loadingPage.style.transition = 'opacity 1s ease-out';
  loadingPage.style.opacity = '0';
  setTimeout(function() {
    loadingPage.style.display = 'none';
  }, 700);
}, randomTime(500,1200));

function randomTime(min:number,max:number):number{
  return Math.floor((Math.random() * max) + min);
}