import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/core/chat.service';
import { User } from 'src/app/core/user';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {

  users: User[];
  containerName: string = '#general';

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.initCollapsibles();
    console.log('asd');
    this.users = this.chatService.getUsers();
  }

  initCollapsibles() {
    let collapsibles = document.getElementsByClassName("collapsible-header");
    
    for (let i = 0; i < collapsibles.length ; i++) {
      (collapsibles[i].nextElementSibling as HTMLElement).style.height = '0px';

      collapsibles[i].addEventListener("click", function() {
        let temp = document.getElementsByClassName("collapsible-header");
        
        for(let j=0 ; j<temp.length ; ++j) {
          let parent = temp[j].nextElementSibling as HTMLElement;
          let content = temp[j].nextElementSibling as HTMLElement;
          console.log(parent.className);
          
          
          if (this == temp[j]){
            if (content.style.height != '0px'){
              content.style.height = '0px';
              parent.className.replace(' active-header', '');
            } else {
              parent.className += ' active-header';
              content.style.height = Math.max(15, content.scrollHeight) + 'px';
            }
          } else {
            content.style.height = '0px';
            parent.className.replace(' active-header', '');
          }
          console.log(parent.className);
        }
      });
    }
  }
  

}
