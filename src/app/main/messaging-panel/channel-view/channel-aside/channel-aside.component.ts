import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ChatService } from 'src/app/core/chat.service';
import { File } from 'src/app/core/file';
import { SideNavService } from 'src/app/core/side-nav.service';
import { User } from 'src/app/core/user';

@Component({
  selector: 'app-channel-aside',
  templateUrl: './channel-aside.component.html',
  styleUrls: ['./channel-aside.component.scss']
})
export class ChannelAsideComponent implements OnInit {

  users: User[];
  shortcuts: object[];
  pinned: object[];
  files: File[];

  channelName: String;
  sections: boolean[] = [];
  noOfSection: number = 5;

  channelNameSubscription: any
  
  @Output() closeAside = new EventEmitter();

  constructor(private chatService: ChatService, private sidenavService: SideNavService) { 
    this.channelName = this.sidenavService.getSelectedItem()
    this.channelNameSubscription = sidenavService.selectedItemChange.subscribe((value) => {
      this.channelName = value;
    })
  }

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
