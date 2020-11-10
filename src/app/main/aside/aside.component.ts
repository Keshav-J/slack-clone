import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {

  @Output() closeAside = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  closeSelf() {
    this.closeAside.emit();
  }  
}
