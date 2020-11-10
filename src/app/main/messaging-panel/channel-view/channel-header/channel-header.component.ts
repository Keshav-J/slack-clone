import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SideNavService } from '../../../../core/side-nav.service';

@Component({
  selector: 'app-channel-header',
  templateUrl: './channel-header.component.html',
  styleUrls: ['./channel-header.component.scss']
})
export class ChannelHeaderComponent implements OnInit {

  starred: boolean = false;
  channelName: String
  channelNameSubscription: any
  constructor(private sidenavService: SideNavService) { 
    this.channelName = this.sidenavService.getSelectedItem()
    this.channelNameSubscription = sidenavService.selectedItemChange.subscribe((value) => {
      this.channelName = value
    })
  }

  @Output() toggleAside = new EventEmitter();

  ngOnInit(): void {
  }

  toggleStar() {
    this.starred = !this.starred;
  }

  header_toggleAside() {
    this.toggleAside.emit();
  }
}
