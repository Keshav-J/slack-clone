import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Channel } from './channel';
import { ChatService } from './chat.service';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class SideNavService {

  customBrowseList: object[];
  directMessagesList: User[];
  channelsList: Channel[];
  appsList: object[];
  selectedItem: string;

  constructor(private chatService: ChatService) {
    this.customBrowseList = [
      {
        iconUrl: 'far fa-comment-dots',
        name: 'Threads',
        route: ''
      },
      {
        iconUrl: 'far fa-comments',
        name: 'All DMs',
        route: ''
      },
      {
        iconUrl: 'fas fa-stream',
        name: 'All unreads',
        route: ''
      },
      {
        iconUrl: 'far fa-address-book',
        name: 'People & user groups',
        route: 'peopleanduser'
      },
      {
        iconUrl: 'fas fa-at',
        name: 'Mentions & reactions',
        route: ''
      }
    ];

    this.directMessagesList = this.chatService.getUsersList();

    this.channelsList = this.chatService.getChannelsList();

    this.appsList = [
      {
        name: 'Dropbox',
        iconUrl: 'fab fa-dropbox'
      },
      {
        name: 'mailchimp',
        iconUrl: 'fab fa-mailchimp'
      }
    ];

    // selected item
    this.selectedItem = '';
  }

  selectedItemChange: Subject<string> = new Subject<string>();

  getCustomBrowses(): object[] {
    return this.customBrowseList;
  }
  getSlackBrowses(): object[] {
    return this.customBrowseList;
  }
  getChannels(): Channel[] {
    return this.channelsList;
  }
  getDirectMessages(): User[] {
    return this.directMessagesList;
  }
  getApps(): object[] {
    return this.appsList;
  }


  setSelectedItem(item: string): void {
    this.selectedItem = item;
    this.selectedItemChange.next(this.selectedItem);
  }
  getSelectedItem(): string {
    return this.selectedItem;
  }
}

