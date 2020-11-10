import { Component, OnInit } from '@angular/core';
import { SideNavService } from '../../../../core/side-nav.service';

@Component({
  selector: 'app-channel-header',
  templateUrl: './channel-header.component.html',
  styleUrls: ['./channel-header.component.scss']
})
export class ChannelHeaderComponent implements OnInit {

  channelName: String
  channelNameSubscription: any
  constructor(private sidenavService: SideNavService) { 
    this.channelName = this.sidenavService.getSelectedItem()
    this.channelNameSubscription = sidenavService.selectedItemChange.subscribe((value) => {
      this.channelName = value
    })
  }

  ngOnInit(): void {
  }

}
