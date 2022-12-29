import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LottieModule } from 'ngx-lottie';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

export function playerFactory() {
  return import(/* webpackChunkName: 'lottie-web' */ 'lottie-web');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    LottieModule.forRoot({ player: playerFactory })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
