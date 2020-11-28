import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChannelAsideComponent } from './channel-view/channel-aside/channel-aside.component';
import { ChannelComponent } from './channel-view/channel/channel.component';
import { PrivateAsideComponent } from './private-view/private-aside/private-aside.component';
import { PrivateComponent } from './private-view/private/private.component';

const routes: Routes = [
  {
    path: 'channel/:id',
    component: ChannelComponent,
    children: [
      {
        path: 'details',
        component: ChannelAsideComponent,
        children: [
          {
            path: '**',
            redirectTo: ''
          }
        ]
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  },
  {
    path: 'private/:id',
    component: PrivateComponent,
    children: [
      {
        path: 'details',
        component: PrivateAsideComponent,
        children: [
          {
            path: '**',
            redirectTo: ''
          }
        ]
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  },
  {
    path: '**',
    redirectTo: './'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessagingPanelRoutingModule { }
