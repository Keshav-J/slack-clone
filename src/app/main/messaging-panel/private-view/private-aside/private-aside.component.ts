import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ChatService } from 'src/app/core/chat.service';
import { File } from 'src/app/core/file';
import { User } from 'src/app/core/user';

@Component({
  selector: 'app-private-aside',
  templateUrl: './private-aside.component.html',
  styleUrls: ['./private-aside.component.scss']
})
export class PrivateAsideComponent implements OnInit {

  user: User;
  pinned: object[];
  files: File[];

  userName: string;

  sections: boolean[] = [];
  noOfSection: number = 3;

  @Output() closeAside = new EventEmitter();

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.initCollapsibles();

    this.user = this.chatService.getUser(6);
    console.log(this.user);
    
    this.userName = this.user.first_name + ' ' + this.user.last_name;

    this.pinned = [];
    this.files = this.chatService.getFiles();
  }

  initCollapsibles() {
    for (let idx = 0; idx < this.noOfSection ; idx++) {
      this.sections.push(false);
      let content = document.getElementById('section-' + idx);
      content.style.height = '0px';
    }
  }

  toggleSection(id: number) {
    console.log(id);
    this.sections.forEach((val, idx) => {
      console.log(idx, val);
      let content = document.getElementById('section-' + idx);
      
      if(idx == id) {
        this.sections[idx] = !this.sections[idx];
        if(content.style.height == '0px') {
          content.style.height = Math.max(15, content.scrollHeight) + 'px';
        }
        else {
          content.style.height = '0px';
        }
      }
      else {
        this.sections[idx] = false;
        content.style.height = '0px';
      }
    });
  }

  closeSelf() {
    this.closeAside.emit();
  }
}
