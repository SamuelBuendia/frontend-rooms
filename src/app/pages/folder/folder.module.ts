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
import { FoldersComponent } from './folders/folders.component';
import { FolderComponent } from './folder.component';
// import { FolderRoutingModule} from './folder-routing.module';
import { FolderEditComponent } from './folders/folder-edit/folder-edit.component';
import { FolderAutocompleteComponent } from './folders/folder-autocomplete/folder-autocomplete.component';
import { FolderService } from './_services/';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FoldersComponent,
    FolderComponent,
    FolderEditComponent,
    FolderAutocompleteComponent,
  ],
  imports: [
    CommonModule,
    // FolderRoutingModule,
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
    FolderService,
    ConfirmationService
  ]
})
export class FolderModule {}
