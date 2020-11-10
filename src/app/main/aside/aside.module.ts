import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from './aside.component';

import { MatExpansionModule } from '@angular/material/expansion';
import { UserSingleLineComponent } from 'src/app/shared/user-single-line/user-single-line.component';
import { ChannelViewComponent } from './channel-view/channel-view.component';
import { PrivateViewComponent } from './private-view/private-view.component';

@NgModule({
  declarations: [
    AsideComponent,
    UserSingleLineComponent,
    ChannelViewComponent,
    PrivateViewComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule
  ],
  exports: [
    AsideComponent,
    UserSingleLineComponent
  ]
})
export class AsideModule { }
