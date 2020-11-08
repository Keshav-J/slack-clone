import { Component, OnInit } from '@angular/core';
import { SideNavService } from '../../../core/side-nav.service';
@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent implements OnInit {

  caret: boolean =false;

  selectedItem: string;
  
  selectItem(item: string): void {
    console.log(item)
    this.sidenavService.setSelectedItem(item);
    this.selectedItem = item;
  }

  channelsList = this.sidenavService.getChannels();

  constructor(private sidenavService: SideNavService) { }

  ngOnInit(): void {
  }

}
