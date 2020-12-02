import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-channel-header',
  templateUrl: './channel-header.component.html',
  styleUrls: ['./channel-header.component.scss']
})
export class ChannelHeaderComponent implements OnInit {

  @Input() channelName: string;
  @Input() isGroup: boolean;

  @Output() toggleAside = new EventEmitter();

  starred = false;

  constructor() { }

  ngOnInit(): void {
    console.log(this.channelName);
  }

  toggleStar(): void {
    this.starred = !this.starred;
  }

  header_toggleAside(): void {
    this.toggleAside.emit();
  }
}
