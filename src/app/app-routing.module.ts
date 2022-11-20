import { MainPageComponent } from './pages/main-page/main-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { AutoLoginPageComponent } from './pages/auto-login-page/auto-login-page.component';
import { ModifyCreateEventComponent } from './pages/modify-create-event/modify-create-event.component';
import { AuthGuard } from './services/user-data/auth.guard';

const routes: Routes = [
  { path: '', component: AuthPageComponent },
  { path: 'home', component: MainPageComponent, canActivate: [AuthGuard] },
  { path: 'autoLogin', component: AutoLoginPageComponent },
  {
    path: 'eventManage',
    component: ModifyCreateEventComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
