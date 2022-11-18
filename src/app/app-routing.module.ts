import { MainPageComponent } from './pages/main-page/main-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { AutoLoginPageComponent } from './pages/auto-login-page/auto-login-page.component';

const routes: Routes = [
  { path: '', component: AuthPageComponent },
  { path: 'home', component: MainPageComponent },
  { path: 'autoLogin', component: AutoLoginPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
