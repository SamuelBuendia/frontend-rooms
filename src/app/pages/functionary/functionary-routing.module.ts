import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FunctionaryComponent } from './functionary.component';
import { FunctionarysComponent } from './functionarys/functionarys.component';
import { FunctionaryEditComponent } from './functionarys/functionary-edit/functionary-edit.component';

const routes: Routes = [
  {
    path: '',
    component: FunctionaryComponent,
    children: [
      {
        path: 'list',
        component: FunctionarysComponent,
      },
      {
        path: 'add',
        component: FunctionaryEditComponent
      },
      {
        path: 'edit/:id',
        component: FunctionaryEditComponent
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
export class FunctionaryRoutingModule {}
