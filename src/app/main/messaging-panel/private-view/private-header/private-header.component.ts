import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-private-header',
  templateUrl: './private-header.component.html',
  styleUrls: ['./private-header.component.scss']
})
export class PrivateHeaderComponent implements OnInit {

  starred: boolean = false;

  @Output() toggleAside = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  makeStar() {
    this.starred = !this.starred;
  }

  header_toggleAside() {
    console.log('asdas');
    
    this.toggleAside.emit();
  }
}
