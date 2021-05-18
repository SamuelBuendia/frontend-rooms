import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InlineSVGModule } from 'ng-inline-svg';

import { TableModule }  from 'primeng/table';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FileUploadModule } from 'primeng/fileupload';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { BadgeModule } from 'primeng/badge';
import { ChipsModule } from 'primeng/chips';
import { MultiSelectModule } from 'primeng/multiselect';
import { EditorModule } from 'primeng/editor';

import { ImageCropperModule } from 'ngx-image-cropper';

import { CurrencyMaskModule } from "ng2-currency-mask";

import { TranslateModule } from '@ngx-translate/core';

// import { CompanyModule } from './company/company.module';
// import { TypeCompanyModule } from './type-company/type-company.module';

// Users
import { UsersComponent } from './user/users/users.component';
import { UserComponent } from './user/user.component';
import { UserEditComponent } from './user/users/user-edit/user-edit.component';
import { UserAutocompleteComponent } from './user/users/user-autocomplete/user-autocomplete.component';

// Functionarys
import { FunctionarysComponent } from './functionary/functionarys/functionarys.component';
import { FunctionaryComponent } from './functionary/functionary.component';
import { FunctionaryEditComponent } from './functionary/functionarys/functionary-edit/functionary-edit.component';
import { FunctionaryAutocompleteComponent } from './functionary/functionarys/functionary-autocomplete/functionary-autocomplete.component';
import { FunctionaryMultiselectComponent } from './functionary/functionarys/functionary-multiselect/functionary-multiselect.component';

// Spaces
import { SpacesComponent } from './space/spaces/spaces.component';
import { SpaceComponent } from './space/space.component';
import { SpaceEditComponent } from './space/spaces/space-edit/space-edit.component';
import { SpaceAutocompleteComponent } from './space/spaces/space-autocomplete/space-autocomplete.component';

// Rooms
import { RoomsComponent } from './room/rooms/rooms.component';
import { RoomComponent } from './room/room.component';
import { RoomEditComponent } from './room/rooms/room-edit/room-edit.component';
import { RoomAutocompleteComponent } from './room/rooms/room-autocomplete/room-autocomplete.component';

@NgModule({
  imports: [
    CommonModule,
    TableModule,
    FileUploadModule,
    DialogModule,
    ConfirmDialogModule,
    AutoCompleteModule,
    BadgeModule,
    ChipsModule,
    MultiSelectModule,
    EditorModule,
    CurrencyMaskModule,
    ToggleButtonModule,
    CalendarModule,
    DropdownModule,
    ImageCropperModule,
    // CompanyModule,
    // TypeCompanyModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    InlineSVGModule,
    TranslateModule.forRoot(),
  ],
  declarations: [
    UsersComponent,
    UserComponent,
    UserEditComponent,
    UserAutocompleteComponent,
    FunctionarysComponent,
    FunctionaryComponent,
    FunctionaryEditComponent,
    FunctionaryAutocompleteComponent,
    FunctionaryMultiselectComponent,
    SpacesComponent,
    SpaceComponent,
    SpaceEditComponent,
    SpaceAutocompleteComponent,
    RoomsComponent,
    RoomComponent,
    RoomEditComponent,
    RoomAutocompleteComponent,
  ]
})
export class PagesModule { }
