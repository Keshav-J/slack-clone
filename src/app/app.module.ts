import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SideNavModule } from './main/side-nav/side-nav.module';

import { AppComponent } from './app.component';
import { ChannelComponent } from './main/messaging-panel/channel-view/channel/channel.component';
import { ChannelHeaderComponent } from './main/messaging-panel/channel-view/channel-header/channel-header.component';
import { PrivateComponent } from './main/messaging-panel/private-view/private/private.component';

import { ChatboxComponent } from './shared/chatbox/chatbox.component';
import { MessageContainerComponent } from './shared/message-container/message-container.component';
import { MessageComponent } from './shared/message/message.component';
import { PrivateHeaderComponent } from './main/messaging-panel/private-view/private-header/private-header.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ChannelComponent,
    ChannelHeaderComponent,
    PrivateComponent,
    PrivateHeaderComponent,
    ChatboxComponent,
    MessageContainerComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    SideNavModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
