import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent implements OnInit {

  @Output() togglePrivateAside = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  private_toggleAside() {
    console.log('asdasdasdasdas');
    
    this.togglePrivateAside.emit();
  }
}
