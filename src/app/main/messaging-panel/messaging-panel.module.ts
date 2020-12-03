import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagingPanelRoutingModule } from './messaging-panel-routing.module';
import { ChannelComponent } from './channel-view/channel/channel.component';
import { ChannelHeaderComponent } from './channel-view/channel-header/channel-header.component';
import { ChannelAsideComponent } from './channel-view/channel-aside/channel-aside.component';
import { PrivateComponent } from './private-view/private/private.component';
import { PrivateHeaderComponent } from './private-view/private-header/private-header.component';
import { PrivateAsideComponent } from './private-view/private-aside/private-aside.component';
import { MessageContainerComponent } from 'src/app/shared/message-container/message-container.component';
import { MessageComponent } from 'src/app/shared/message/message.component';
import { ChatboxComponent } from 'src/app/shared/chatbox/chatbox.component';
import { PeopleanduserComponent } from './people-and-user/people-and-user.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    ChannelComponent,
    ChannelHeaderComponent,
    ChannelAsideComponent,
    PrivateComponent,
    PrivateHeaderComponent,
    PrivateAsideComponent,
    MessageContainerComponent,
    MessageComponent,
    ChatboxComponent,
    PeopleanduserComponent
  ],
  imports: [
    CommonModule,
    MessagingPanelRoutingModule,
    MatIconModule,
    MatDialogModule
  ]
})
export class MessagingPanelModule { }
