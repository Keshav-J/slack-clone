import { Component, Input, OnInit } from '@angular/core';
import { ChatService } from 'src/app/core/chat.service';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.scss']
})
export class ChatboxComponent implements OnInit {

  blur: boolean;
  showFormat = true;

  @Input() id: string;
  @Input() name: string;

  constructor(private chatservice: ChatService) { }

  ngOnInit(): void {
  }
  isBlur(): void {
    this.blur = true;
  }
  changeFormat(): void {
    this.showFormat = !this.showFormat;
  }

  sendMessage(): void {
    const msg = (document.getElementById('msgData') as HTMLInputElement).value;
    (document.getElementById('msgData') as HTMLInputElement).value = '';

    console.log(`from add msg ${msg}`);

    this.chatservice.addMessage(this.id, msg);
  }

}
