import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'slack-clone';


  
  ngAfterViewInit() {

  //side-nav resize
  const resizer : HTMLElement = document.getElementById('dragMe');
  const leftSide = resizer.previousElementSibling as HTMLElement;
  const rightSide = resizer.nextElementSibling as HTMLElement;
  let x = 0;
  let y = 0;
  let leftWidth = 0;
  const mouseDownHandler = function(e) {
      x = e.clientX;
      y = e.clientY;
      leftWidth = leftSide.getBoundingClientRect().width;
      console.log(x,y,leftWidth)
      document.addEventListener('mousemove', mouseMoveHandler);
      document.addEventListener('mouseup', mouseUpHandler);
  };
  const mouseMoveHandler = function(e) {
      const dx = e.clientX - x;
      const dy = e.clientY - y;
      const newLeftWidth = (leftWidth + dx) * 100 / ((resizer.parentNode as Element).getBoundingClientRect() as DOMRect).width;
      leftSide.style.width = `${newLeftWidth}%`;
      resizer.style.cursor = 'col-resize';
      document.body.style.cursor = 'col-resize';
      leftSide.style.userSelect = 'none';
      leftSide.style.pointerEvents = 'none';
      rightSide.style.userSelect = 'none';
      rightSide.style.pointerEvents = 'none';
  };
  const mouseUpHandler = function() {
      resizer.style.removeProperty('cursor');
      document.body.style.removeProperty('cursor');
      leftSide.style.removeProperty('user-select');
      leftSide.style.removeProperty('pointer-events');
      rightSide.style.removeProperty('user-select');
      rightSide.style.removeProperty('pointer-events');
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
  };
  resizer.addEventListener('mousedown', mouseDownHandler);

// details section resize
const resizer1 : HTMLElement = document.getElementById('dragMe-1');
const leftSide1 = resizer1.previousElementSibling as HTMLElement;
const rightSide1 = resizer1.nextElementSibling as HTMLElement;
let  x1 = 0;
let y1 = 0;
let leftWidth1 = 0;
const mouseDownHandler1 = function(e) {
    x1 = e.clientX;
    y1 = e.clientY;
    leftWidth1 = leftSide1.getBoundingClientRect().width;
    console.log(x1,y1,leftWidth1)
    document.addEventListener('mousemove', mouseMoveHandler1);
    document.addEventListener('mouseup', mouseUpHandler1);
};
const mouseMoveHandler1 = function(e) {
    const dx1 = e.clientX - x1;
    const dy1 = e.clientY - y1;
    const newLeftWidth1 = (leftWidth1 + dx1) * 100 / ((resizer1.parentNode as Element).getBoundingClientRect() as DOMRect).width;
    leftSide1.style.width = `${newLeftWidth1}%`;
    resizer1.style.cursor = 'col-resize';
    document.body.style.cursor = 'col-resize';
    leftSide1.style.userSelect = 'none';
    leftSide1.style.pointerEvents = 'none';
    rightSide1.style.userSelect = 'none';
    rightSide1.style.pointerEvents = 'none';
};
const mouseUpHandler1 = function() {
    resizer1.style.removeProperty('cursor');
    document.body.style.removeProperty('cursor');
    leftSide1.style.removeProperty('user-select');
    leftSide1.style.removeProperty('pointer-events');
    rightSide1.style.removeProperty('user-select');
    rightSide1.style.removeProperty('pointer-events');
    document.removeEventListener('mousemove', mouseMoveHandler1);
    document.removeEventListener('mouseup', mouseUpHandler1);
};
resizer1.addEventListener('mousedown', mouseDownHandler1);
}
}
