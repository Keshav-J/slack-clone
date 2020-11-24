import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from 'src/app/core/chat.service';
import { File } from 'src/app/core/file';
import { SideNavService } from 'src/app/core/side-nav.service';
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
  userSubscription: any;

  sections: boolean[] = [];
  noOfSection: number;

  date: Date;

  @Output() closeAside = new EventEmitter();

  constructor(private router: Router,
              private sidenavService: SideNavService,
              private chatService: ChatService) {
    this.user = this.chatService.getUser(this.sidenavService.getSelectedItem());

    this.userSubscription = sidenavService.selectedItemChange.subscribe((value) => {
      this.user = this.chatService.getUser(value);
      this.userName = this.user.firstName + ' ' + this.user.lastName;
    });
  }

  ngOnInit(): void {
    this.noOfSection = 3;
    this.initCollapsibles();

    this.pinned = [];
    this.files = this.chatService.getFiles();

    this.date = new Date();

    this.userName = this.user.firstName + ' ' + this.user.lastName;
  }

  initCollapsibles(): void {
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
