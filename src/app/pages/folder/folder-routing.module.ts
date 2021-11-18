import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderComponent } from './folder.component';
import { FoldersComponent } from './folders/folders.component';
import { FolderEditComponent } from './folders/folder-edit/folder-edit.component';

const routes: Routes = [
  {
    path: '',
    component: FolderComponent,
    children: [
      {
        path: 'list',
        component: FoldersComponent,
      },
      {
        path: 'add',
        component: FolderEditComponent
      },
      {
        path: 'edit/:id',
        component: FolderEditComponent
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
export class FolderRoutingModule {}
