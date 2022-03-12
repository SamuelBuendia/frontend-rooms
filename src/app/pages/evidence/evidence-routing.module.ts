import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EvidenceComponent } from './evidence.component';
import { EvidencesComponent } from './evidences/evidences.component';
import { EvidenceEditComponent } from './evidences/evidence-edit/evidence-edit.component';

const routes: Routes = [
  {
    path: '',
    component: EvidenceComponent,
    children: [
      {
        path: 'list',
        component: EvidencesComponent,
      },
      {
        path: 'add',
        component: EvidenceEditComponent
      },
      {
        path: 'edit/:id',
        component: EvidenceEditComponent
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
export class EvidenceRoutingModule {}
