import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ChatService } from 'src/app/core/chat.service';
import { File } from 'src/app/core/file';
import { User } from 'src/app/core/user';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {

  users: User[];
  shortcuts: object[];
  pinned: object[];
  files: File[];

  containerName: string = '#general';
  sections: boolean[] = [];
  noOfSection: number = 5;

  @Output() closeAside = new EventEmitter();

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.initCollapsibles();

    this.users = this.chatService.getUsers();
    this.shortcuts = [];
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
