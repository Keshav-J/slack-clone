import { Component, OnInit } from '@angular/core';
import { SideNavService } from '../../../core/side-nav.service';

@Component({
  selector: 'app-direct-messages',
  templateUrl: './direct-messages.component.html',
  styleUrls: ['./direct-messages.component.scss']
})
export class DirectMessagesComponent implements OnInit {

  caret: boolean = false;

  selectedItem: string = this.sidenavService.getSelectedItem();
  
  selectItem(item: string): void {
    this.sidenavService.setSelectedItem(item);
    this.selectedItem = item;
  }

  directMessagesList = this.sidenavService.getDirectMessages();
  
  constructor(private sidenavService: SideNavService) { }

  ngOnInit(): void {
  }

}
