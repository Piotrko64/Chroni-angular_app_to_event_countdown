import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimatedWallpaperComponent } from './components/auth-page/animated-wallpaper/animated-wallpaper.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { MarkFiveComponent } from './components/auth-page/animated-wallpaper/SVG/mark-five/mark-five.component';
import { ClockSvgComponent } from './components/auth-page/animated-wallpaper/SVG/clock-svg/clock-svg.component';
import { MarkZeroComponent } from './components/auth-page/animated-wallpaper/SVG/mark-zero/mark-zero.component';
import { ShapeSvgComponent } from './components/auth-page/animated-wallpaper/SVG/shape-svg/shape-svg.component';
import { LoginPanelComponent } from './components/auth-page/login-panel/login-panel.component';
import { CookiePanelComponent } from './components/auth-page/cookie-panel/cookie-panel.component';
import { OrdinaryButtonComponent } from './ui/buttons/ordinary-button/ordinary-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalAlertComponent } from './ui/modal-alert/modal-alert.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthLoaderComponent } from './ui/auth-loader/auth-loader.component';
import { DigitalNumberComponent } from './ui/digital-number/digital-number.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SingleSetDataInfoComponent } from './components/main-page/single-set-data-info/single-set-data-info.component';
import { WholeSetInfoComponent } from './components/main-page/whole-set-info/whole-set-info.component';
import { DigitalPlusComponent } from './ui/digital-plus/digital-plus.component';
import { ListEventsComponent } from './components/main-page/list-events/list-events.component';
import { AutoLoginPageComponent } from './pages/auto-login-page/auto-login-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ButtonsPanelComponent } from './components/main-page/buttons-panel/buttons-panel.component';
import { SingleButtonComponent } from './components/main-page/buttons-panel/single-button/single-button.component';
import { ModifyCreateEventComponent } from './pages/modify-create-event/modify-create-event.component';

import { RouterModule } from '@angular/router';
import { SliceTextPipe } from './pipes/slice-text.pipe';
@NgModule({
  declarations: [
    AppComponent,
    AnimatedWallpaperComponent,
    AuthPageComponent,
    MarkFiveComponent,
    ClockSvgComponent,
    MarkZeroComponent,
    ShapeSvgComponent,
    LoginPanelComponent,
    CookiePanelComponent,
    OrdinaryButtonComponent,
    ModalAlertComponent,
    AuthLoaderComponent,
    DigitalNumberComponent,
    MainPageComponent,
    SingleSetDataInfoComponent,
    WholeSetInfoComponent,
    DigitalPlusComponent,
    ListEventsComponent,
    AutoLoginPageComponent,
    NavigationComponent,
    ButtonsPanelComponent,
    SingleButtonComponent,
    ModifyCreateEventComponent,
    SliceTextPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
