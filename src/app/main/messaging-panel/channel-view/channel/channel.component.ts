import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Channel } from 'src/app/core/channel';
import { ChatService } from 'src/app/core/chat.service';
import { SideNavService } from 'src/app/core/side-nav.service';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {

  displayAside = true;
  channel: Channel;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private chatService: ChatService,
              private sidenavService: SideNavService) {
    this.route.params.subscribe(val => {
      this.ngOnInit();
    });
  }

  ngOnInit(): void {
    const segments = this.router.url.split('/');
    console.log('segments => ', segments, segments.indexOf('channel'), segments[segments.indexOf('channel') + 1]);

    const id = segments[segments.indexOf('channel') + 1];

    const channel = this.chatService.getChannelById(id);

    if (channel === undefined) {
      this.router.navigate(['']);
    } else {
      this.channel = channel;
      this.sidenavService.setSelectedItem(this.channel.id);
    }
  }

  toggleAside(): void {
    const segments = this.router.url.split('/');
    console.log(segments);

    if (segments[segments.length - 1] === 'details') {
      segments.pop();
    } else {
      segments.push('details');
    }
    this.router.navigate(segments);
  }
}
