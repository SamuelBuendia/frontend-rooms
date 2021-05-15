import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoomComponent } from './room.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomEditComponent } from './rooms/room-edit/room-edit.component';

const routes: Routes = [
  {
    path: '',
    component: RoomComponent,
    children: [
      {
        path: 'list',
        component: RoomsComponent,
      },
      {
        path: 'add',
        component: RoomEditComponent
      },
      {
        path: 'edit/:id',
        component: RoomEditComponent
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
export class RoomRoutingModule {}
