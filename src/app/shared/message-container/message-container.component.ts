import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/core/chat.service';
import { Message } from 'src/app/core/message';
import { User } from 'src/app/core/user';

@Component({
  selector: 'app-message-container',
  templateUrl: './message-container.component.html',
  styleUrls: ['./message-container.component.scss']
})
export class MessageContainerComponent implements OnInit {

  messages: Message[];
  users: User[];

  constructor(private chatservice: ChatService) { }

  ngOnInit(): void {
    this.messages = this.chatservice.getMessages();
    this.users = this.chatservice.getUsers();
    console.log(this.messages);
  }

  addToCart(msg): void {
    this.chatservice.addToCart(msg);
  }

  addmsg(): void {
    const msg = (document.getElementById('msgData') as HTMLInputElement).value;

    console.log(`from add msg ${msg}`);
    this.addToCart(msg);
  }

  makeBreak(message): boolean {
    message.time = message.time;
    return true;
  }
}
