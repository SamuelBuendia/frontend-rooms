import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpaceComponent } from './space.component';
import { SpacesComponent } from './spaces/spaces.component';
import { SpaceEditComponent } from './spaces/space-edit/space-edit.component';

const routes: Routes = [
  {
    path: '',
    component: SpaceComponent,
    children: [
      {
        path: 'list',
        component: SpacesComponent,
      },
      {
        path: 'add',
        component: SpaceEditComponent
      },
      {
        path: 'edit/:id',
        component: SpaceEditComponent,
        children: [
          {
            path: 'rooms',
            loadChildren: () =>
              import('../../pages/room/room-routing.module').then(
                (m) => m.RoomRoutingModule
              ),
          },
        ]
      },
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: '**', redirectTo: 'list', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpaceRoutingModule {}
