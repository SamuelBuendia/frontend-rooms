import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineSVGModule } from 'ng-inline-svg';
import { NgbDatepickerModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule }  from 'primeng/table';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { EvidencesComponent } from './evidences/evidences.component';
import { EvidenceComponent } from './evidence.component';
// import { EvidenceRoutingModule} from './evidence-routing.module';
import { EvidenceEditComponent } from './evidences/evidence-edit/evidence-edit.component';
import { EvidenceAutocompleteComponent } from './evidences/evidence-autocomplete/evidence-autocomplete.component';
import { EvidenceService } from './_services/';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    EvidencesComponent,
    EvidenceComponent,
    EvidenceEditComponent,
    EvidenceAutocompleteComponent,
  ],
  imports: [
    CommonModule,
    // EvidenceRoutingModule,
    InlineSVGModule,
    NgbModalModule,
    NgbDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    ToggleButtonModule,
    ConfirmDialogModule,
    AutoCompleteModule,
    RouterModule
  ],
  entryComponents: [
  ],
  providers: [
    EvidenceService,
    ConfirmationService
  ]
})
export class EvidenceModule {}
