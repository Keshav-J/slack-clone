import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {

  displayAside = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toggleAside(): void {
    const segments = this.router.url.split('/');
    console.log(segments);

    if (segments[segments.length - 1] === 'details') {
      segments.pop();
    } else {
      segments.push('details');
    }
    this.router.navigate(segments);
  }
}
