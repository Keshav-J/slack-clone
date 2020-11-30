import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlSegment } from '@angular/router';
import { PageNotFoundComponent } from './anonymous/page-not-found/page-not-found.component';
import { UnderConstructionComponent } from './anonymous/under-construction/under-construction.component';
import { PeopleanduserComponent } from './main/messaging-panel/people-and-user/people-and-user.component';

// tslint:disable-next-line: typedef
function checkChat(url: UrlSegment[]) {
  if (url.length > 0 && (url[0].path.startsWith('C') || url[0].path.startsWith('G') || url[0].path.startsWith('D'))) {
    return { consumed: [] };
  } else {
    return null;
  }
}

const routes: Routes = [
  {
    path: 'client/T01AA4Y2QCU',
    children: [
      {
        path: '',
        component: PageNotFoundComponent
      },
      {
        matcher: checkChat,
        loadChildren: () => import('./main/messaging-panel/messaging-panel.module')
        .then(m => m.MessagingPanelModule)
      },
      {path: 'threads', component: UnderConstructionComponent},
      {path: 'all-dms', component: UnderConstructionComponent},
      {path: 'browse-people', component: PeopleanduserComponent},
      {path: 'saved-page', component: UnderConstructionComponent},
      {path: 'dropbox', component: UnderConstructionComponent},
      {path: 'mailchimp', component: UnderConstructionComponent},
      {
        path: '**',
        redirectTo: ''
      }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
