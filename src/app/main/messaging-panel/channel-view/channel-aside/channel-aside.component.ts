import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Channel } from 'src/app/core/models/channel';
import { ChatService } from 'src/app/core/chat.service';
import { SideNavService } from 'src/app/core/side-nav.service';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-channel-aside',
  templateUrl: './channel-aside.component.html',
  styleUrls: ['./channel-aside.component.scss']
})
export class ChannelAsideComponent implements OnInit {

  members: User[];
  shortcuts: object[];

  channel: Channel;
  sections: string[];
  activeSection: string;

  selectedChannelId: string;
  selectedChannelIdSubscription: Subscription;

  constructor(private router: Router,
              private chatService: ChatService,
              private sidenavService: SideNavService) {
    this.selectedChannelId = this.sidenavService.getSelectedItem();
    this.selectedChannelIdSubscription = sidenavService.selectedItemChange.subscribe(value => {
      this.selectedChannelId = value;
      this.ngOnInit();
    });
  }

  ngOnInit(): void {
    this.initCollapsibleSections();

    this.channel = this.chatService.getChannelById(this.selectedChannelId);

    if (this.channel) {
      this.members = this.chatService.getUsersWithId(this.channel.memberIds);
    }
    this.shortcuts = [];
  }

  initCollapsibleSections(): void {
    this.sections = ['info', 'members', 'actions', 'pins', 'shared_files'];
    this.activeSection = '';
    this.sections.forEach(sectionName => {
      const content = document.getElementById(sectionName);
      if (content !== null) {
        content.style.height = '0px';
      }
    });
  }

  toggleSection(name: string): void {
    console.log(name);
    this.sections.forEach((sectionName) => {
      const content = document.getElementById(sectionName);

      if (content === undefined) { return; }

      if (sectionName === name) {
        if (this.activeSection !== sectionName) {
          content.style.height = Math.max(15, content.scrollHeight) + 'px';
          this.activeSection = sectionName;
        }
        else {
          content.style.height = '0px';
          this.activeSection = '';
        }
      }
      else {
        content.style.height = '0px';
      }
    });
  }

  closeDetails(): void {
    const segments = this.router.url.split('/');
    console.log(segments);

    if (segments[segments.length - 1] === 'details') {
      segments.pop();
    }

    this.router.navigate(segments);
  }
}
