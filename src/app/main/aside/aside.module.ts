import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from './aside.component';

import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    AsideComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule
  ],
  exports: [
    AsideComponent
  ]
})
export class AsideModule { }
