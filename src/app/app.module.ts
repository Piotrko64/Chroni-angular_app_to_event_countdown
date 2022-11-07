import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimatedWallpaperComponent } from './components/auth-page/animated-wallpaper/animated-wallpaper.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimatedWallpaperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
