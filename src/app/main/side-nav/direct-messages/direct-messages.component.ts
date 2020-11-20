import { Component, OnInit } from '@angular/core';
import { SideNavService } from '../../../core/side-nav.service';

@Component({
  selector: 'app-direct-messages',
  templateUrl: './direct-messages.component.html',
  styleUrls: ['./direct-messages.component.scss']
})
export class DirectMessagesComponent implements OnInit {

  constructor(private sidenavService: SideNavService) {
    this.selectedItem = this.sidenavService.getSelectedItem();
    this.selectedItemSubscription = sidenavService.selectedItemChange.subscribe((value) => {
      this.selectedItem = value;
    });
  }

  caret = false;

  selectedItem: string;
  selectedItemSubscription: any;

  directMessagesList = this.sidenavService.getDirectMessages();
  selectItem(item: string): void {
    this.sidenavService.setSelectedItem(item);
    this.selectedItem = item;
  }

  ngOnInit(): void {
  }

}
