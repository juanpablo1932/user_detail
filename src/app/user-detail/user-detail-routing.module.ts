import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './user-detail.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {
    path: 'detail/:username',
    component: UserDetailComponent,
  },
  {
    path: 'detail/followers',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './Module',
      }).then((m) => m.FollowersListModule),
  },
  // {
  //   path: 'test',
  //   loadChildren: () =>
  //     loadRemoteModule({
  //       type: 'script',
  //       remoteName: 'remote',
  //       remoteEntry: 'http://localhost:3000/_next/static/chunks/remoteEntry.js',
  //       exposedModule: './nextjs-remote-component',
  //     }).then((m) => m.NextjsRemoteComponent),
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserDetailRoutingModule {}
