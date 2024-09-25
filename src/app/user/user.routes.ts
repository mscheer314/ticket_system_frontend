import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
export const userRoutes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule],
})
export class UserPageRoutingModule {}
