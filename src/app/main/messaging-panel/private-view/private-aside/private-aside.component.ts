import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
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

  selectedUserId: string;
  selectedUserIdSubscription: Subscription;

  sections: string[];
  activeSection: string;

  date: Date;

  @Output() closeAside = new EventEmitter();

  constructor(private router: Router,
              private chatService: ChatService,
              private sidenavService: SideNavService) {
    this.selectedUserId = this.sidenavService.getSelectedItem();
    this.selectedUserIdSubscription = sidenavService.selectedItemChange.subscribe(value => {
      this.selectedUserId = value;
      this.ngOnInit();
    });
  }

  ngOnInit(): void {
    this.initCollapsibleSections();

    this.user = this.chatService.getUserById(this.selectedUserId);

    this.pinned = [];
    this.files = this.chatService.getFiles();

    this.date = new Date();

    if (this.user) {
      this.userName = this.user.firstName + ' ' + this.user.lastName;
    }
  }

  initCollapsibleSections(): void {
    this.sections = ['info', 'pins', 'shared_files'];
    this.activeSection = '';
    this.sections.forEach(sectionName => {
      const content = document.getElementById(sectionName);
      content.style.height = '0px';
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
