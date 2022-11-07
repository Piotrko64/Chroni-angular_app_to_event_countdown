import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimatedWallpaperComponent } from './components/auth-page/animated-wallpaper/animated-wallpaper.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { MarkFiveComponent } from './components/auth-page/animated-wallpaper/SVG/mark-five/mark-five.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimatedWallpaperComponent,
    AuthPageComponent,
    MarkFiveComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
