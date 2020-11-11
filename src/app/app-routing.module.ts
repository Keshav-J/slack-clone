import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChannelComponent } from './main/messaging-panel/channel-view/channel/channel.component';
import { PrivateComponent } from './main/messaging-panel/private-view/private/private.component';
import { PeopleanduserComponent } from './main/messaging-panel/people-and-user/people-and-user.component';

const routes: Routes = [
  {path:'', redirectTo: '/channel', pathMatch: 'full'},
  {path:'channel', component: ChannelComponent},
  {path:'private', component: PrivateComponent},
  {path: 'peopleanduser', component: PeopleanduserComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
