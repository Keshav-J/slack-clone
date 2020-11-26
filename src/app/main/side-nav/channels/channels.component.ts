import { Component, OnInit } from '@angular/core';
import { Channel } from 'src/app/core/channel';
import { SideNavService } from '../../../core/side-nav.service';
@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent implements OnInit {

  constructor(private sidenavService: SideNavService) {
    this.selectedItem = this.sidenavService.getSelectedItem();
    this.selectedItemSubscription = sidenavService.selectedItemChange.subscribe((value) => {
        this.selectedItem = value;
    });
  }

  caret = false;

  selectedItem: string;

  selectedItemSubscription: any;

  channelsList: Channel[];


  selectItem(item: string): void {
    this.sidenavService.setSelectedItem(item);
    this.selectedItem = item;
  }

  ngOnInit(): void {
    this.channelsList = this.sidenavService.getChannels();
  }

}
