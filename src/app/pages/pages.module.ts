import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './food/navbar/navbar.component';
import { ContentComponent } from './food/content/content.component';
import { NavbarBottomComponent } from './food/navbar-bottom/navbar-bottom.component';
import { IConfig, NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@NgModule({
  declarations: [
    NavbarComponent,
    ContentComponent,
    NavbarBottomComponent
  ],
  imports: [
    NgxMaskDirective, NgxMaskPipe,
    CommonModule,
    PagesRoutingModule,
    FormsModule
  ],
  providers: [provideNgxMask()]
})
export class PagesModule { }
