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
import { FieldsetModule } from 'primeng/fieldset';

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

// Folders
import { FoldersComponent } from './folder/folders/folders.component';
import { FolderComponent } from './folder/folder.component';
import { FolderEditComponent } from './folder/folders/folder-edit/folder-edit.component';
import { FolderAutocompleteComponent } from './folder/folders/folder-autocomplete/folder-autocomplete.component';

// Evidences
import { EvidencesComponent } from './evidence/evidences/evidences.component';
import { EvidenceComponent } from './evidence/evidence.component';
import { EvidenceEditComponent } from './evidence/evidences/evidence-edit/evidence-edit.component';
import { EvidenceAutocompleteComponent } from './evidence/evidences/evidence-autocomplete/evidence-autocomplete.component';

// Permission
import { PermissionsComponent } from './permission/permissions/permissions.component';
import { PermissionComponent } from './permission/permission.component';
import { PermissionEditComponent } from './permission/permissions/permission-edit/permission-edit.component';
import { PermissionAutocompleteComponent } from './permission/permissions/permission-autocomplete/permission-autocomplete.component';
import { PermissionMultiselectComponent } from './permission/permissions/permission-multiselect/permission-multiselect.component';

// Groups
import { GroupsComponent } from './group/groups/groups.component';
import { GroupComponent } from './group/group.component';
import { GroupEditComponent } from './group/groups/group-edit/group-edit.component';
import { GroupAutocompleteComponent } from './group/groups/group-autocomplete/group-autocomplete.component';
import { GroupMultiselectComponent } from './group/groups/group-multiselect/group-multiselect.component';

// ContentTypes
import { ContentTypesComponent } from './content-type/content-types/content-types.component';
import { ContentTypeComponent } from './content-type/content-type.component';
import { ContentTypeEditComponent } from './content-type/content-types/content-type-edit/content-type-edit.component';
import { ContentTypeSelectComponent } from './content-type/content-types/content-type-select/content-type-select.component';
import { ContentTypeAutocompleteComponent } from './content-type/content-types/content-type-autocomplete/content-type-autocomplete.component';


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
    FieldsetModule,
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
    FoldersComponent,
    FolderComponent,
    FolderEditComponent,
    FolderAutocompleteComponent,
    PermissionsComponent,
    PermissionComponent,
    PermissionEditComponent,
    PermissionAutocompleteComponent,
    PermissionMultiselectComponent,
    GroupsComponent,
    GroupComponent,
    GroupEditComponent,
    GroupAutocompleteComponent,
    GroupMultiselectComponent,
    ContentTypesComponent,
    ContentTypeComponent,
    ContentTypeEditComponent,
    ContentTypeSelectComponent,
    ContentTypeAutocompleteComponent,
    EvidencesComponent,
    EvidenceComponent,
    EvidenceEditComponent,
    EvidenceAutocompleteComponent
  ]
})
export class PagesModule { }
