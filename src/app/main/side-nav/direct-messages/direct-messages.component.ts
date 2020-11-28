import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/user';
import { SideNavService } from '../../../core/side-nav.service';

@Component({
  selector: 'app-direct-messages',
  templateUrl: './direct-messages.component.html',
  styleUrls: ['./direct-messages.component.scss']
})
export class DirectMessagesComponent implements OnInit {

  constructor(private router: Router,
              private sidenavService: SideNavService) {
    this.selectedItem = this.sidenavService.getSelectedItem();
    this.selectedItemSubscription = sidenavService.selectedItemChange.subscribe((value) => {
      this.selectedItem = value;
    });
  }

  caret = false;

  selectedItem: string;
  selectedItemSubscription: any;

  directMessagesList: User[];

  selectItem(item: string): void {
    this.sidenavService.setSelectedItem(item);
    this.selectedItem = item;
  }

  ngOnInit(): void {
    this.directMessagesList = this.sidenavService.getDirectMessages();
  }

  redirect(id: string): void {
    let segments = this.router.url.split('/');
    console.log(segments);

    if (segments.includes('private')) {
      const idx = segments.indexOf('private');
      segments[idx + 1] = id;
    } else if (segments.includes('channel')) {
      const idx = segments.indexOf('channel');
      segments[idx] = 'private';
      segments[idx + 1] = id;
    } else {
      segments = ['', 'chats', 'private', id];
    }

    this.router.navigate(segments);
  }

}
