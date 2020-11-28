import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Channel } from 'src/app/core/channel';
import { SideNavService } from '../../../core/side-nav.service';
@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent implements OnInit {

  caret = false;
  selectedItem: string;
  selectedItemSubscription: Subscription;

  channelsList: Channel[];

  constructor(private router: Router,
              private sidenavService: SideNavService) {
    this.selectedItem = this.sidenavService.getSelectedItem();
    this.selectedItemSubscription = sidenavService.selectedItemChange.subscribe(value => {
      this.selectedItem = value;
    });
  }

  ngOnInit(): void {
    this.channelsList = this.sidenavService.getChannels();
  }

  redirect(id: string): void {
    let segments = this.router.url.split('/');
    console.log(segments);

    if (segments.includes('channel')) {
      const idx = segments.indexOf('channel');
      segments[idx + 1] = id;
    } else if (segments.includes('private')) {
      const idx = segments.indexOf('private');
      segments[idx] = 'channel';
      segments[idx + 1] = id;
    } else {
      segments = ['', 'chats', 'channel', id];
    }

    this.router.navigate(segments);
  }

}
