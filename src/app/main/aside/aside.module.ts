import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from './aside.component';

import { MatExpansionModule } from '@angular/material/expansion';
import { UserSingleLineComponent } from 'src/app/shared/user-single-line/user-single-line.component';

@NgModule({
  declarations: [
    AsideComponent,
    UserSingleLineComponent
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
