import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direct-messages',
  templateUrl: './direct-messages.component.html',
  styleUrls: ['./direct-messages.component.scss']
})
export class DirectMessagesComponent implements OnInit {

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
