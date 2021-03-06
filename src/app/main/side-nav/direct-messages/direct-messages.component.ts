import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from 'src/app/core/chat.service';
import { DirectMessage } from 'src/app/core/models/direct-message';
import { User } from 'src/app/core/models/user';
import { SideNavService } from 'src/app/core/side-nav.service';

@Component({
  selector: 'app-direct-messages',
  templateUrl: './direct-messages.component.html',
  styleUrls: ['./direct-messages.component.scss']
})
export class DirectMessagesComponent implements OnInit {

  constructor(private router: Router,
              private chatService: ChatService,
              private sidenavService: SideNavService) {
    this.selectedItem = this.sidenavService.getSelectedItem();
    this.selectedItemSubscription = sidenavService.selectedItemChange.subscribe((value) => {
      this.selectedItem = value;
    });
  }

  caret = false;

  selectedItem: string;
  selectedItemSubscription: any;

  users: { [key: string]: User };
  directMessagesList: DirectMessage[];

  selectItem(item: string): void {
    this.sidenavService.setSelectedItem(item);
    this.selectedItem = item;
  }

  ngOnInit(): void {
    this.directMessagesList = this.sidenavService.getDirectMessages();
    this.users = this.chatService.getUsers();
  }

  redirect(id: string): void {
    let segments = this.router.url.split('/');
    console.log(segments);

    if (segments.includes('details')) {
      segments = ['', 'client', 'T01AA4Y2QCU', id].concat(segments.slice(segments.indexOf('details')));
    } else {
      segments = ['', 'client', 'T01AA4Y2QCU', id];
    }

    this.sidenavService.setSelectedItem(id);

    this.router.navigate(segments);
  }

  closeChat(userId: string): void {
    this.sidenavService.closeDirectMessage(userId);
  }
}
