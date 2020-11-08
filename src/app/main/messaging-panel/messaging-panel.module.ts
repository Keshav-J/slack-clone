import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChannelComponent } from './channel-view/channel/channel.component';
import { ChannelHeaderComponent } from './channel-view/channel-header/channel-header.component';
import { PrivateComponent } from './private-view/private/private.component';
import { PrivateHeaderComponent } from './private-view/private-header/private-header.component';
import { ChatboxComponent } from 'src/app/shared/chatbox/chatbox.component';
import { MessageComponent } from 'src/app/shared/message/message.component';
import { MessageContainerComponent } from 'src/app/shared/message-container/message-container.component';
import { MessagingPanelComponent } from './messaging-panel.component';

import {MatDialogModule} from '@angular/material/dialog';
import { PeopleanduserComponent } from './people-and-user/people-and-user.component';


@NgModule({
  declarations: [
    ChannelComponent,
    ChannelHeaderComponent,
    PrivateComponent,
    PrivateHeaderComponent,
    ChatboxComponent,
    MessageComponent,
    MessageContainerComponent,
    MessagingPanelComponent,
    PeopleanduserComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ChannelComponent,
    ChannelHeaderComponent,
    PrivateComponent,
    PrivateHeaderComponent,
    ChatboxComponent,
    MessageComponent,
    MessageContainerComponent,
    MessagingPanelComponent,
    MatDialogModule
  ]
})
export class MessagingPanelModule { }
