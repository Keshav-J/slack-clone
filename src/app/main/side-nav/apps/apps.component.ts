import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.scss']
})
export class AppsComponent implements OnInit {
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
