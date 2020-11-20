import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {

  displayAside = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleAside(): void {
    this.displayAside = !this.displayAside;
  }

  closeAside(): void {
    this.displayAside = false;
  }
}
