import { Component, Input, OnInit } from '@angular/core';
import { ChatService } from 'src/app/core/chat.service';
import { Message } from 'src/app/core/models/message';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-message-container',
  templateUrl: './message-container.component.html',
  styleUrls: ['./message-container.component.scss']
})
export class MessageContainerComponent implements OnInit {

  @Input() messages: Message[];
  users: { [key: string]: User };

  constructor(private chatservice: ChatService) { }

  ngOnInit(): void {
    this.users = this.chatservice.getUsers();
  }
}
