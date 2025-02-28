import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user/detail/juan',
    pathMatch: 'full',
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./user-detail/user-detail.module').then(
        (m) => m.UserDetailModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
