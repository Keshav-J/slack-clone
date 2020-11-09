import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav.component';
import { AppsComponent } from './apps/apps.component';
import { ChannelsComponent } from './channels/channels.component';
import { CustomiseBrowseComponent } from './customise-browse/customise-browse.component';
import { DirectMessagesComponent } from './direct-messages/direct-messages.component';
import { SlackBrowseComponent } from './slack-browse/slack-browse.component';
import { BadgeComponent } from './badge/badge.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';




@NgModule({
  declarations: [
    SideNavComponent,
    AppsComponent,
    ChannelsComponent,
    CustomiseBrowseComponent,
    DirectMessagesComponent,
    SlackBrowseComponent,
    BadgeComponent,

  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
  ],
  exports: [
    SideNavComponent,
    AppsComponent,
    ChannelsComponent,
    CustomiseBrowseComponent,
    DirectMessagesComponent,
    SlackBrowseComponent
  ],
  bootstrap: [
    SideNavComponent
  ]
})
export class SideNavModule { }
