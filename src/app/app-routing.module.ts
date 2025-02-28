import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: () =>
      import('./user-detail/user-detail.module').then(
        (m) => m.UserDetailModule
      ),
  },
  // {
  //   path: 'followers/:username',
  //   loadChildren: () =>
  //     loadRemoteModule({
  //       type: 'module',
  //       remoteEntry: 'http://localhost:4201/remoteEntry.js',
  //       exposedModule: './Module',
  //     }).then((m) => m.FollowersListModule),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
