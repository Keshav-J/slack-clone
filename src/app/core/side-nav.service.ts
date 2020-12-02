import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Channel } from './channel';
import { ChatService } from './chat.service';
import { DirectMessage } from './direct-message';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class SideNavService {

  customBrowseList: object[];
  directMessagesList: DirectMessage[];
  channelsList: Channel[];
  appsList: object[];

  selectedItem: string;

  constructor(private chatService: ChatService) {
    this.customBrowseList = [
      {
        iconUrl: 'far fa-comment-dots',
        name: 'Threads',
        route: 'threads'
      },
      {
        iconUrl: 'far fa-comments',
        name: 'All DMs',
        route: 'all-dms'
      },
      {
        iconUrl: 'far fa-address-book',
        name: 'People & user groups',
        route: 'browse-people'
      },
      {
        iconUrl: 'far fa-bookmark',
        name: 'Saved items',
        route: 'saved-page'
      }
    ];

    this.directMessagesList = this.chatService.getDirectMessagesList();

    this.channelsList = this.chatService.getChannelsList();

    this.appsList = [
      {
        name: 'Dropbox',
        iconUrl: 'fab fa-dropbox',
        route: 'dropbox'
      },
      {
        name: 'Mailchimp',
        iconUrl: 'fab fa-mailchimp',
        route: 'mailchimp'
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
  getDirectMessages(): DirectMessage[] {
    return this.directMessagesList;
  }
  getApps(): object[] {
    return this.appsList;
  }


  getSelectedItem(): string {
    return this.selectedItem;
  }
  setSelectedItem(item: string): void {
    this.selectedItem = item;
    this.selectedItemChange.next(this.selectedItem);
  }


  closeDirectMessage(id: string): void {
    this.chatService.closeDirectMessage(id);
  }
}

