import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChatService } from 'src/app/core/chat.service';
import { Message } from 'src/app/core/message';
import { SideNavService } from 'src/app/core/side-nav.service';
import { User } from 'src/app/core/user';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent implements OnInit {

  user: User;
  userName: string;

  messages: Message[];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private chatService: ChatService,
              private sidenavService: SideNavService) {
    sidenavService.selectedItemChange.subscribe(id => {
      if (id.startsWith('D')) {
        const user = this.chatService.getUserById(id);

        if (user === undefined) {
          this.router.navigate(['']);
        } else {
          this.user = user;
          this.userName = this.user.firstName + (this.user.lastName === '' ? '' : (' ' + this.user.lastName));
          this.messages = this.chatService.getMessages();
        }
      }
    });
  }

  ngOnInit(): void {
    const segments = this.router.url.split('/');
    console.log('segments => ', segments, segments[3]);

    if (segments.length < 4) { this.router.navigate(['']); }

    const id = segments[3];

    const user = this.chatService.getUserById(id);

    if (user === undefined) {
      this.router.navigate(['']);
    } else {
      this.user = user;
      this.userName = this.user.firstName + (this.user.lastName === '' ? '' : (' ' + this.user.lastName));
      this.messages = this.chatService.getMessages();

      this.sidenavService.setSelectedItem(this.user.id);
    }
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
