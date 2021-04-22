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

// Employees
import { EmployeesComponent } from './employee/employees/employees.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeEditComponent } from './employee/employees/employee-edit/employee-edit.component';
import { EmployeeAutocompleteComponent } from './employee/employees/employee-autocomplete/employee-autocomplete.component';
import { EmployeeMultiselectComponent } from './employee/employees/employee-multiselect/employee-multiselect.component';

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
    EmployeesComponent,
    EmployeeComponent,
    EmployeeEditComponent,
    EmployeeAutocompleteComponent,
    EmployeeMultiselectComponent
  ]
})
export class PagesModule { }
