import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {

  displayAside: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleAside() {
    this.displayAside = !this.displayAside;
  }

  closeAside() {
    this.displayAside = false;
  }
}
