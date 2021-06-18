import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { ToastService } from 'src/app/modules/toast/_services/toast.service';
import { AuthService } from 'src/app/modules/auth';
import { RoomModel as Model } from '../../_models/room.model';
import { RoomService as ModelsService } from '../../_services/room.service';
import { SpaceService } from 'src/app/pages/space/_services';

@Component({
  selector: 'app-room-edit',
  templateUrl: './room-edit.component.html',
  styleUrls: ['./room-edit.component.scss']
})
export class RoomEditComponent implements OnInit, OnDestroy {
  public id: number;
  public model: Model;
  public previous: Model;
  public formGroup: FormGroup;
  public requesting: boolean;

  public tabs = {
    BASIC_TAB: 0,
  };

  public name: AbstractControl;
  public number_room: AbstractControl;
  public description: AbstractControl;
  public active: AbstractControl;
  public functionary: AbstractControl;
  public space: AbstractControl;
   
  public activeTabId: number;
  private subscriptions: Subscription[] = [];

  public saveAndExit;

  public spaceId: number;
  public parent: string;

  constructor(
    private fb: FormBuilder,
    private modelsService: ModelsService,
    private router: Router,
    private route: ActivatedRoute,
    private toastService: ToastService,
    private spaceService: SpaceService,
  ) {
    this.activeTabId = this.tabs.BASIC_TAB; // 0 => Basic info | 1 => Profile
    this.saveAndExit = false;
    this.requesting = false;

    this.formGroup = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(30)])],
      number_room: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(30)])],
      description: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(30)])],
      active: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(30)])],
      functionary: ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(30)])],
      space: ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(30)])],
    });
    this.name = this.formGroup.controls['name'];
    this.number_room = this.formGroup.controls['number_room'];
    this.description = this.formGroup.controls['description'];
    this.active = this.formGroup.controls['active'];
    this.functionary = this.formGroup.controls['functionary'];
    this.space = this.formGroup.controls['space'];
  }

  ngOnInit(): void {
    this.id = undefined;
    this.model = undefined;
    this.previous = undefined;

    this.route.parent.parent.parent.params.subscribe((params) => {
      if (this.route.parent.parent.parent.parent.parent.snapshot.url.length > 0) {
        this.spaceId = params.id;
        this.parent = '/' + this.route.parent.parent.parent.parent.parent.snapshot.url[0].path + '/edit/' + this.spaceId;
      }
      this.get();
    });

  }

  get() {
    this.requesting = true;
    const sb = this.route.paramMap.pipe(
      switchMap(params => {
        // get id from URL
        this.id = Number(params.get('id'));
        if (this.id || this.id > 0) {
          return this.modelsService.getById(this.id);
        }
        return of({ 'room': new Model() });
      }),
      catchError((error) => {
        this.requesting = false;
        let messageError = [];
        if (!Array.isArray(error.error)) {
          messageError.push(error.error);
        } else {
          messageError = error.error;
        }
        Object.entries(messageError).forEach(
          ([key, value]) => this.toastService.growl('error', key + ': ' + value)
        );
        return of({ 'room': new Model() });
      }),
    ).subscribe((response: any) => {
      this.requesting = false;
      if (response) {
        this.model = response.room;
        if (response.functionaries) {
          this.model.functionary = response.functionaries[0];
        }
        // let rooms = response['+rooms'];
        if (response.spaces) {
          this.model.space = response.spaces[0];
        }
        this.previous = Object.assign({}, this.model);
        this.loadForm();
      }
    });
    this.subscriptions.push(sb);
  }

  loadForm() {
    this.active.setValue(true);
    
    if (this.model.id) {
      this.name.setValue(this.model.name);
      this.number_room.setValue(this.model.number_room);
      this.description.setValue(this.model.description);
      this.active.setValue(this.model.active);
      if (this.model.functionary) {
        this.functionary.setValue(this.model.functionary);
      }
      if (this.model.space) {
        this.space.setValue(this.model.space);
      }
    } else {
      if (this.spaceId) {
        this.GetSpaceById(this.spaceId);
      }
    }
    this.formGroup.markAllAsTouched();
  }

  reset() {
    if (this.previous) {
      this.model = Object.assign({}, this.previous);
      this.loadForm();
    }
  }

  save(saveAndExit) {
    this.saveAndExit = saveAndExit;
    this.formGroup.markAllAsTouched();
    if (this.formGroup.valid) {
      const formValues = this.formGroup.value;
      this.model = Object.assign(this.model, formValues);
      if (this.id) {
        this.edit();
      } else {
        this.create();
      }
    }
  }

  edit() {
    this.requesting = true;
    let model = this.model;
    model.active = this.model.active;
    if (this.model.functionary) {
      model.functionary = this.model.functionary.id;
    }
    if (this.model.space) {
      model.space = this.model.space.id;
    }

    const sbUpdate = this.modelsService.patch(this.id, model).pipe(
      tap(() => {
        this.toastService.growl('success', 'success');
        if (this.saveAndExit) {
          if(this.parent){
            this.router.navigate([this.parent + '/rooms']);
          } else {
            this.router.navigate(['/rooms']);
          }
        }
      }),
      catchError((error) => {
        this.requesting = false;
        let messageError = [];
        if (!Array.isArray(error.error)) {
          messageError.push(error.error);
        } else {
          messageError = error.error;
        }
        Object.entries(messageError).forEach(
          ([key, value]) => this.toastService.growl('error', key + ': ' + value)
        );
        return of(this.model);
      })
    ).subscribe(response => {
      this.requesting = false;
      this.model = response.room
    });
    this.subscriptions.push(sbUpdate);
  }

  create() {
    this.requesting = true;

    let model = this.model;
    model.active = this.active.value;

    if (this.model.functionary) {
      model.functionary = this.model.functionary.id;
    }

    model.space = this.model.space.id;
    
    const sbCreate = this.modelsService.post(model).pipe(
      tap(() => {
        this.toastService.growl('success', 'success');
        if (this.saveAndExit) {
          if(this.parent){
            this.router.navigate([this.parent + '/rooms']);
          } else {
            this.router.navigate(['/rooms']);
          }
        } else {
          this.formGroup.reset()
        }
      }),
      catchError((error) => {
        this.requesting = false;
        let messageError = [];
        if (!Array.isArray(error.error)) {
          messageError.push(error.error);
        } else {
          messageError = error.error;
        }
        Object.entries(messageError).forEach(
          ([key, value]) => this.toastService.growl('error', key + ': ' + value)
        );
        return of(this.model);
      })
    ).subscribe(response => {
      this.requesting = false;
      this.model = response.room as Model
    });
    this.subscriptions.push(sbCreate);
  }

  changeTab(tabId: number) {
    this.activeTabId = tabId;
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sb => sb.unsubscribe());
  }

  // helpers for View
  isControlValid(controlName: string): boolean {
    const control = this.formGroup.controls[controlName];
    return control.valid && (control.dirty || control.touched);
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.formGroup.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }

  controlHasError(validation: string, controlName: string) {
    const control = this.formGroup.controls[controlName];
    return control.hasError(validation) && (control.dirty || control.touched);
  }

  isControlTouched(controlName: string): boolean {
    const control = this.formGroup.controls[controlName];
    return control.dirty || control.touched;
  }

  public getValidClass(valid) {
    let stringClass = 'form-control form-control-lg form-control-solid';
    if (valid) {
      stringClass += ' is-valid';
    } else {
      stringClass += ' is-invalid';
    }
    return stringClass;
  }

  public formatDate(date) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    let hours = '' + d.getHours();
    let minutes = '' + d.getMinutes();
    let seconds = '' + d.getSeconds();

    if (month.length < 2) {
      month = '0' + month;
    }
    if (day.length < 2) {
      day = '0' + day;
    }

    if (hours.length < 2) {
      hours = '0' + hours;
    }

    if (minutes.length < 2) {
      minutes = '0' + minutes;
    }

    if (seconds.length < 2) {
      seconds = '0' + seconds;
    }

    return [year, month, day].join('-');
  }

  GetSpaceById(id) {
    this.spaceService.getById(id).toPromise().then(
      response => {
        this.space.setValue(response.space)
      },
      error => {
        console.log('error getting space');
      }
    );
  }
}
