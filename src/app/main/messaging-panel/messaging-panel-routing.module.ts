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

// tslint:disable-next-line: typedef
function checkChannelDetails(url: UrlSegment[]) {
  if (url.length === 1 && url[0].path === 'details') {
    return { consumed: url };
  } else if (url.length === 2 && url[0].path === 'details'
              && ['info', 'members', 'actions', 'pins', 'shared_files'].includes(url[1].path)) {
    return { consumed: url };
  } else if (url.length > 0 && url[0].path === 'details') {
    return {
      consumed: [ url[0] ]
    };
  } else {
    return null;
  }
}

// tslint:disable-next-line: typedef
function checkDirectMessageDetails(url: UrlSegment[]) {
  if (url.length === 1 && url[0].path === 'details') {
    return { consumed: url };
  } else if (url.length === 2 && url[0].path === 'details'
              && ['info', 'pins', 'shared_files'].includes(url[1].path)) {
    return { consumed: url };
  } else if (url.length > 0 && url[0].path === 'details') {
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
        matcher: checkChannelDetails,
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
        matcher: checkDirectMessageDetails,
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
