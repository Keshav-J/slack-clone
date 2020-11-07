import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {

  panelOpenState: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.initCollapsibles();
    console.log('asd');
    
  }

  initCollapsibles() {
    let collapsibles = document.getElementsByClassName("collapsible-header");
    
    for (let i = 0; i < collapsibles.length ; i++) {
      collapsibles[i].addEventListener("click", function() {
        let temp = document.getElementsByClassName("collapsible-header");
        
        for(let j=0 ; j<temp.length ; ++j) {
          let content = temp[j].nextElementSibling as HTMLElement;
          
          if (this == temp[j]){
            if (content.style.maxHeight){
              content.style.maxHeight = null;
            } else {
              content.style.maxHeight = content.scrollHeight + "px";
            }
          } else {
            content.style.maxHeight = null;
          }
        }
      });
    }
  }
  

}
