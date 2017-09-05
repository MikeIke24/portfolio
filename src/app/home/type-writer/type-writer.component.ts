import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-type-writer',
  template: `<span id="typing-target"></span><div id="cursor"></div>`,
  styleUrls: ['./type-writer.component.scss']
})
export class TypeWriterComponent implements OnInit {
  constructor() {}
  typing: string = '';
  textArray = ['Web Developer', 'Software Developer', 'Chemical Engineer', 'Graphic Designer', 'Lifelong Student'];
  count: number = 0;
  sentence: number = 0;
  initializeAnimation() {
    if (this.textArray.length === 0 || !this.textArray) {
      this.noTextProvidedError();
    } else if (this.textArray.length === 1) {
      this.oneLineAnimation();
    } else {
      this.multiLineAnimation();
    }
  }
  oneLineAnimation() {}
  multiLineAnimation() {
    this.textTimer();
  }
  randomTime(min: number, max: number): number {
    return Math.floor((Math.random() * max) + min);
  }
  noTextProvidedError() {
    alert('No text provided to initializtion of class');
  }
  append(printText: string) {
    this.typing += printText;
    document.getElementById('typing-target').innerText = this.typing;


  }
  erase() {
    let currentText = this.typing;
    if (currentText.length === 0) {
      return false;
    }
    this.typing = currentText.slice(0, -1);
    document.getElementById('typing-target').innerText = this.typing;

  }
  textTimer() {
    let _this = this;
    let textTimer =
      setInterval(() => {
        let text = _this.textArray[_this.sentence];
        _this.append(text.charAt(_this.count));
        _this.count += 1;
        if (_this.count >= text.length) {
          _this.count = 0;
          clearInterval(textTimer);
          setTimeout(() => {
            let eraseTimer = setInterval(function () {
              while (_this.erase()) {}
              if (_this.typing === '') {
                _this.sentence += 1;
                if (_this.sentence >= _this.textArray.length) {
                  _this.sentence = 0;
                }
                clearInterval(eraseTimer);
                setTimeout(() => {
                  _this.textTimer();
                }, 1500);

              }
            },60);
          },1500);

        }
      }, 75);
  }

  ngOnInit() {

  }

}
let typeWriter = new TypeWriterComponent();
setTimeout(function() {
  typeWriter.initializeAnimation();
}, 2000);

