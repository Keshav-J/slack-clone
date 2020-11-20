import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { TopnavbarComponent } from './main/header/topnavbar/topnavbar.component';
import { SideNavModule } from './main/side-nav/side-nav.module';
import { MessagingPanelModule } from './main/messaging-panel/messaging-panel.module';

@NgModule({
  declarations: [
    AppComponent,
    TopnavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    HttpClientModule,
    SideNavModule,
    MessagingPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
