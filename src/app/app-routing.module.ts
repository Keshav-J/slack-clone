import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './anonymous/page-not-found/page-not-found.component';
import { UnderConstructionComponent } from './anonymous/under-construction/under-construction.component';
import { PeopleanduserComponent } from './main/messaging-panel/people-and-user/people-and-user.component';

const routes: Routes = [
  {
    path: '',
    component: PageNotFoundComponent
  },
  {
    path: 'chats',
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
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
