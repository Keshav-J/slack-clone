import { Component, OnInit } from '@angular/core';
import { SideNavService } from '../../../core/side-nav.service';

@Component({
  selector: 'app-slack-browse',
  templateUrl: './slack-browse.component.html',
  styleUrls: ['./slack-browse.component.scss']
})
export class SlackBrowseComponent implements OnInit {

  showSlackBrowseContainer : boolean = false;

  selectedItem: string = this.sidenavService.getSelectedItem();
  
  selectItem(item: string): void {
    this.sidenavService.setSelectedItem(item);
  }

  slackBrowseList = this.sidenavService.getSlackBrowses();

  constructor(private sidenavService: SideNavService) { }
  

  ngOnInit(): void {
  }

}
