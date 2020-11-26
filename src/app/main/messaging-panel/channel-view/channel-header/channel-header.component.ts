import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Channel } from 'src/app/core/channel';
import { ChatService } from 'src/app/core/chat.service';
import { SideNavService } from '../../../../core/side-nav.service';

@Component({
  selector: 'app-channel-header',
  templateUrl: './channel-header.component.html',
  styleUrls: ['./channel-header.component.scss']
})
export class ChannelHeaderComponent implements OnInit {

  channel: Channel;
  channelSubscription: any;

  starred = false;

  constructor(private sidenavService: SideNavService,
              private chatService: ChatService) {
    this.channel = this.chatService.getChannelById(this.sidenavService.getSelectedItem());

    this.channelSubscription = sidenavService.selectedItemChange.subscribe((value) => {
      this.channel = this.chatService.getChannelById(this.sidenavService.getSelectedItem());
    });
  }

  @Output() toggleAside = new EventEmitter();

  ngOnInit(): void {
  }

  toggleStar(): void {
    this.starred = !this.starred;
  }

  header_toggleAside(): void {
    this.toggleAside.emit();
  }
}
