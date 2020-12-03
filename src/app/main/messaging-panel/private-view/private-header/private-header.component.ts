import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-private-header',
  templateUrl: './private-header.component.html',
  styleUrls: ['./private-header.component.scss']
})
export class PrivateHeaderComponent implements OnInit {

  @Input() userName: string;

  starred = false;

  constructor() { }

  @Output() toggleAside = new EventEmitter();


  ngOnInit(): void {
  }

  toggleStar(): void {
    this.starred = !this.starred;
  }

  header_toggleAside(): void {
    this.toggleAside.emit();
  }
}
