import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './_layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'errors/404',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'builder',
        loadChildren: () =>
          import('./builder/builder.module').then((m) => m.BuilderModule),
      },
      {
        path: 'user-profile',
        loadChildren: () =>
          import('../modules/user-profile/user-profile.module').then(
            (m) => m.UserProfileModule
          ),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('../pages/user/user-routing.module').then(
            (m) => m.UserRoutingModule
          ),
      },
      {
        path: 'functionarys',
        loadChildren: () =>
          import('../pages/functionary/functionary-routing.module').then(
            (m) => m.FunctionaryRoutingModule
          ),
      },
      {
        path: 'spaces',
        loadChildren: () =>
          import('../pages/space/space-routing.module').then(
            (m) => m.SpaceRoutingModule
          ),
      },
      {
        path: 'rooms',
        loadChildren: () =>
          import('../pages/room/room-routing.module').then(
            (m) => m.RoomRoutingModule
          ),
      },
      {
        path: 'permissions',
        loadChildren: () =>
          import('../pages/permission/permission-routing.module').then(
            (m) => m.PermissionRoutingModule
          ),
      },
      {
        path: 'groups',
        loadChildren: () =>
          import('../pages/group/group-routing.module').then(
            (m) => m.GroupRoutingModule
          ),
      },
      {
        path: 'contenttypes',
        loadChildren: () =>
          import('../pages/content-type/content-type-routing.module').then(
            (m) => m.ContentTypeRoutingModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
