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
import { SpacesComponent } from './spaces/spaces.component';
import { SpaceComponent } from './space.component';
// import { SpaceRoutingModule} from './space-routing.module';
import { SpaceEditComponent } from './spaces/space-edit/space-edit.component';
import { SpaceAutocompleteComponent } from './spaces/space-autocomplete/space-autocomplete.component';
import { SpaceService } from './_services/';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SpacesComponent,
    SpaceComponent,
    SpaceEditComponent,
    SpaceAutocompleteComponent,
  ],
  imports: [
    CommonModule,
    // SpaceRoutingModule,
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
    SpaceService,
    ConfirmationService
  ]
})
export class SpaceModule {}
