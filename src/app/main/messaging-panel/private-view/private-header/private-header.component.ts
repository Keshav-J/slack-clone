import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-private-header',
  templateUrl: './private-header.component.html',
  styleUrls: ['./private-header.component.scss']
})
export class PrivateHeaderComponent implements OnInit {

  starred: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  makeStar() {
    this.starred = !this.starred;

  }
}
