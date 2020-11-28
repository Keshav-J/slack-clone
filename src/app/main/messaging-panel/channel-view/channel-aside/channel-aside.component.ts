import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Channel } from 'src/app/core/channel';
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

  members: User[];
  shortcuts: object[];

  channel: Channel;
  sections: boolean[] = [];
  noOfSection: number;

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
    this.initCollapsibles();

    this.channel = this.chatService.getChannelById(this.selectedChannelId);

    this.members = this.chatService.getUsersWithId(this.channel.memberIds);
    this.shortcuts = [];
  }

  initCollapsibles(): void {
    this.noOfSection = 5;
    for (let idx = 0; idx < this.noOfSection ; idx++) {
      this.sections.push(false);
      const content = document.getElementById('section-' + idx);
      content.style.height = '0px';
    }
  }

  toggleSection(id: number): void {
    console.log(id);
    this.sections.forEach((val, idx) => {
      console.log(idx, val);
      const content = document.getElementById('section-' + idx);

      if (idx === id) {
        this.sections[idx] = !this.sections[idx];
        if (content.style.height === '0px') {
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

  closeDetails(): void {
    const segments = this.router.url.split('/');
    console.log(segments);

    if (segments[segments.length - 1] === 'details') {
      segments.pop();
    }

    this.router.navigate(segments);
  }
}
