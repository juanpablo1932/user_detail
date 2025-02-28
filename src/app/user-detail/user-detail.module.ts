import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDetailRoutingModule } from './user-detail-routing.module';
import {
  EmailPipe,
  FollowersPipe,
  FollowingPipe,
} from './pipes/followers.pipe';
import { UserDetailComponent } from './user-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [FollowersPipe, UserDetailComponent, FollowingPipe, EmailPipe],
  imports: [
    CommonModule,
    UserDetailRoutingModule,
    HttpClientModule,
    MatCardModule,
  ],
})
export class UserDetailModule {}
