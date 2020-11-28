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
import { PageNotFoundComponent } from './anonymous/page-not-found/page-not-found.component';
import { UnderConstructionComponent } from './anonymous/under-construction/under-construction.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    TopnavbarComponent,
    PageNotFoundComponent,
    UnderConstructionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    MatDialogModule,
    MatMenuModule,
    MatToolbarModule,
    HttpClientModule,
    SideNavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
