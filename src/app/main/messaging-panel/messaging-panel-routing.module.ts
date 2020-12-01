import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlSegment, UrlMatcher } from '@angular/router';
import { ChannelAsideComponent } from './channel-view/channel-aside/channel-aside.component';
import { ChannelComponent } from './channel-view/channel/channel.component';
import { PrivateAsideComponent } from './private-view/private-aside/private-aside.component';
import { PrivateComponent } from './private-view/private/private.component';

// tslint:disable-next-line: typedef
function checkChannel(url: UrlSegment[]) {
  if (url.length > 0 && (url[0].path.startsWith('C01') || url[0].path.startsWith('G01'))) {
    return {
      consumed: [ url[0] ]
    };
  } else {
    return null;
  }
}

// tslint:disable-next-line: typedef
function checkDirectMessage(url: UrlSegment[]) {
  if (url.length > 0 && url[0].path.startsWith('D01')) {
    return {
      consumed: [ url[0] ]
    };
  } else {
    return null;
  }
}

const routes: Routes = [
  {
    matcher: checkChannel,
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
    matcher: checkDirectMessage,
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
