import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserPageRoutingModule } from './user.routes';

@NgModule({
  imports: [
    CommonModule, //RouterModule.forChild(userRoutes)
    UserPageRoutingModule,
  ],
  declarations: [],
  providers: [],
})
export class UserModule {}
