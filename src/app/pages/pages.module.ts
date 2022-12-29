import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LottieModule } from 'ngx-lottie';
import { PagesRoutingModule } from './pages-routing.module';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './food/navbar/navbar.component';
import { ContentComponent } from './food/content/content.component';
import { NavbarBottomComponent } from './food/navbar-bottom/navbar-bottom.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

export function playerFactory() {
  return import(/* webpackChunkName: 'lottie-web' */ 'lottie-web');
}

@NgModule({
  declarations: [
    NavbarComponent,
    ContentComponent,
    NavbarBottomComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LottieModule.forRoot({ player: playerFactory }),
    NgxMaskDirective, NgxMaskPipe,
    PagesRoutingModule,
  ],
  providers: [provideNgxMask()]
})
export class PagesModule { }
