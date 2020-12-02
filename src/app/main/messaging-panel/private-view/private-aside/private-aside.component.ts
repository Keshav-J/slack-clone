import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ChatService } from 'src/app/core/chat.service';
import { DirectMessage } from 'src/app/core/models/direct-message';
import { SideNavService } from 'src/app/core/side-nav.service';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-private-aside',
  templateUrl: './private-aside.component.html',
  styleUrls: ['./private-aside.component.scss']
})
export class PrivateAsideComponent implements OnInit {

  user: User;
  directMessage: DirectMessage;

  userName: string;

  selectedUserId: string;
  selectedUserIdSubscription: Subscription;

  sections: string[];
  activeSection: string;

  date: Date;

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
    this.directMessage = this.chatService.getDirectMessageById(this.selectedUserId);

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

    this.checkOpensection();

    setTimeout(() => {
      this.checkOpensection();
    }, 1000);
  }

  checkOpensection(): void {
    const segments = this.router.url.split('/');

    if (!this.sections.includes(segments[segments.length - 1])) {
      return;
    }

    const name = segments[segments.length - 1];
    console.log(name);

    this.sections.forEach((sectionName) => {
      const content = document.getElementById(sectionName);

      if (content === undefined) { return; }

      if (sectionName === name) {
        content.style.height = 'fit-content';
        this.activeSection = sectionName;
      }
      else {
        content.style.height = '0px';
      }
    });
  }

  toggleSection(name: string): void {
    const segments = this.router.url.split('/');
    console.log(name);
    this.sections.forEach((sectionName) => {
      const content = document.getElementById(sectionName);

      if (content === undefined) { return; }

      if (sectionName === name) {
        if (this.activeSection !== sectionName) {
          content.style.height = 'fit-content';
          this.activeSection = sectionName;

          if (segments[segments.length - 1] === 'details') {
            segments.push(sectionName);
          } else {
            segments[segments.length - 1] = sectionName;
          }
        }
        else {
          content.style.height = '0px';
          this.activeSection = '';

          segments.pop();
        }
      }
      else {
        content.style.height = '0px';
      }
    });
    this.router.navigate(segments);
  }

  closeDetails(): void {
    const segments = this.router.url.split('/');
    console.log(segments);

    if (segments.includes('details')) {
      segments.splice(segments.indexOf('details'));
    }

    this.router.navigate(segments);
  }
}
