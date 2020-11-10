import { Component, OnInit } from '@angular/core';
import { SideNavService } from '../../../core/side-nav.service';
@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent implements OnInit {

  caret: boolean =false;

  selectedItem: String;
  
  selectedItemSubscription: any;


  selectItem(item: string): void {
    this.sidenavService.setSelectedItem(item);
    this.selectedItem = item;
  }

  channelsList = this.sidenavService.getChannels();

  constructor(private sidenavService: SideNavService) { 
    this.selectedItem = this.sidenavService.getSelectedItem()
    this.selectedItemSubscription = sidenavService.selectedItemChange.subscribe((value) => {
      this.selectedItem = value
  })
  }

  ngOnInit(): void {
  }

}
