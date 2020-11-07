import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slack-browse',
  templateUrl: './slack-browse.component.html',
  styleUrls: ['./slack-browse.component.scss']
})
export class SlackBrowseComponent implements OnInit {

  showSlackBrowseContainer : boolean = false;

  slackBrowseList = [
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

  constructor() { 
  }

  ngOnInit(): void {
  }

}
