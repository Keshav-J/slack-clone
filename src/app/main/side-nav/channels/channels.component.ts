import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Channel } from 'src/app/core/models/channel';
import { SideNavService } from 'src/app/core/side-nav.service';
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

    if (segments.includes('details')) {
      segments = ['', 'client', 'T01AA4Y2QCU', id].concat(segments.slice(segments.indexOf('details')));
    } else {
      segments = ['', 'client', 'T01AA4Y2QCU', id];
    }

    this.sidenavService.setSelectedItem(id);

    this.router.navigate(segments);
  }

}
