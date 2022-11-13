import { MainPageComponent } from './pages/main-page/main-page.component';
import { DigitalNumberComponent } from './ui/digital-number/digital-number.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';

const routes: Routes = [
  { path: '', component: AuthPageComponent },
  { path: 'home', component: MainPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
