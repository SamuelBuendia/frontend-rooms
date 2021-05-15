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
import { RoomsComponent } from './rooms/rooms.component';
import { RoomComponent } from './room.component';
// import { RoomRoutingModule} from './room-routing.module';
import { RoomEditComponent } from './rooms/room-edit/room-edit.component';
import { RoomAutocompleteComponent } from './rooms/room-autocomplete/room-autocomplete.component';
import { RoomService } from './_services/';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    RoomsComponent,
    RoomComponent,
    RoomEditComponent,
    RoomAutocompleteComponent,
  ],
  imports: [
    CommonModule,
    // RoomRoutingModule,
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
    RoomService,
    ConfirmationService
  ]
})
export class RoomModule {}
