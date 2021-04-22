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
import { FunctionarysComponent } from './functionarys/functionarys.component';
import { FunctionaryComponent } from './functionary.component';
// import { FunctionaryRoutingModule} from './functionary-routing.module';
import { FunctionaryEditComponent } from './functionarys/functionary-edit/functionary-edit.component';
import { FunctionaryAutocompleteComponent } from './functionarys/functionary-autocomplete/functionary-autocomplete.component';
import { FunctionaryService } from './_services/';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FunctionarysComponent,
    FunctionaryComponent,
    FunctionaryEditComponent,
    FunctionaryAutocompleteComponent,
  ],
  imports: [
    CommonModule,
    // FunctionaryRoutingModule,
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
    FunctionaryService,
    ConfirmationService
  ]
})
export class FunctionaryModule {}
