import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent implements OnInit {

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
