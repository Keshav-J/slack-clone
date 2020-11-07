import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent implements OnInit {

  customList = [
    {
      iconUrl: "",
      name: "Threads"
    },
    {
      iconUrl: "",
      name: "All DMs"
    },
    {
      iconUrl: "",
      name: "All unreads"
    },
    {
      iconUrl: "",
      name: "Save items"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
