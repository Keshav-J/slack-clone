import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleanduserComponent } from './main/messaging-panel/people-and-user/people-and-user.component';

const routes: Routes = [
  {path: 'peopleanduser', component: PeopleanduserComponent},
  {
    path: '',
    loadChildren: () => import('./main/messaging-panel/messaging-panel.module')
                        .then(m => m.MessagingPanelModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
