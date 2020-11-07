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
  }

  initCollapsibles() {
    let coll = document.getElementsByClassName("collapsible-header");
    
    for (let i = 0; i < coll.length ; i++) {
      coll[i].addEventListener("click", function() {
        let temp = document.getElementsByClassName("collapsible-header");
        
        for(let j=0 ; j<temp.length ; ++j) {
          var content = temp[j].nextElementSibling;
          
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

    coll[0].nextElementSibling.style.maxHeight = coll[0].nextElementSibling.scrollHeight + "px";
  }
  

}
