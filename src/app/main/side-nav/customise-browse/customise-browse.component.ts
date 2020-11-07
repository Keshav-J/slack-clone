import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customise-browse',
  templateUrl: './customise-browse.component.html',
  styleUrls: ['./customise-browse.component.scss']
})
export class CustomiseBrowseComponent implements OnInit {
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
