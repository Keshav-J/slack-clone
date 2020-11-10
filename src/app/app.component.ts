import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    displayAside:boolean = true;
  
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
    }

    toggleAside() {
        console.log('asdasdasdas');
        
        this.displayAside = !this.displayAside;
    }

    closeAside() {
        this.displayAside = false;
    }
}
