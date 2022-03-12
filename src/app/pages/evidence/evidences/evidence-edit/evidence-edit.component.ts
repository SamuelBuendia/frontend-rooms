import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, ReplaySubject, Subscription } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { ToastService } from 'src/app/modules/toast/_services/toast.service';
import { AuthService } from 'src/app/modules/auth';
import { EvidenceModel as Model } from '../../_models/evidence.model';
import { EvidenceService as ModelsService } from '../../_services/evidence.service';
import { FolderService } from 'src/app/pages/folder/_services';

@Component({
  selector: 'app-evidence-edit',
  templateUrl: './evidence-edit.component.html',
  styleUrls: ['./evidence-edit.component.scss']
})
export class EvidenceEditComponent implements OnInit, OnDestroy {
  public id: number;
  public model: Model;
  public previous: Model;
  public formGroup: FormGroup;
  public requesting: boolean;

  public tabs = {
    BASIC_TAB: 0,
  };

  public re_expiration_date: AbstractControl;
  public evidence_file: AbstractControl;
  public active: AbstractControl;
  public functionary: AbstractControl;
  public folder: AbstractControl;
  public observation: AbstractControl;
  public evidence_link: AbstractControl;
  public qualification: AbstractControl;

  public files = [];
  public fileBase64: string;
   
  public activeTabId: number;
  private subscriptions: Subscription[] = [];

  public saveAndExit;

  public folderId: number;
  public parent: string;
  public groupId: number;

  constructor(
    private fb: FormBuilder,
    private modelsService: ModelsService,
    private router: Router,
    private route: ActivatedRoute,
    private toastService: ToastService,
    public authService: AuthService,
    private folderService: FolderService,
  ) {
    this.activeTabId = this.tabs.BASIC_TAB; // 0 => Basic info | 1 => Profile
    this.saveAndExit = false;
    this.requesting = false;
    this.groupId = this.authService.currentUserValue.groups[0].id;
    console.log(this.groupId)

    this.formGroup = this.fb.group({
      observation: [''],
      evidence_link: [''],
      qualification: [''],
      re_expiration_date: [''],
      evidence_file: [''],
      active: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(30)])],
      functionary: ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(30)])],
      folder: ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(30)])],
    });
    this.observation = this.formGroup.controls['observation'];
    this.evidence_link = this.formGroup.controls['evidence_link'];
    this.qualification = this.formGroup.controls['qualification'];
    this.re_expiration_date = this.formGroup.controls['re_expiration_date'];
    this.evidence_file = this.formGroup.controls['evidence_file'];
    this.active = this.formGroup.controls['active'];
    this.functionary = this.formGroup.controls['functionary'];
    this.folder = this.formGroup.controls['folder'];

    this.files = [];
  }

  ngOnInit(): void {
    this.id = undefined;
    this.model = undefined;
    this.previous = undefined;

    this.route.parent.parent.parent.params.subscribe((params) => {
      if (this.route.parent.parent.parent.parent.parent.snapshot.url.length > 0) {
        this.folderId = params.id;
        this.parent = '/' + this.route.parent.parent.parent.parent.parent.snapshot.url[0].path + '/edit/' + this.folderId;
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
        return of({ 'evidence': new Model() });
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
        return of({ 'evidence': new Model() });
      }),
    ).subscribe((response: any) => {
      this.requesting = false;
      if (response) {
        this.model = response.evidence;
        if (response.functionaries) {
          this.model.functionary = response.functionaries[0];
        }
        // let folders = response['+folders'];
        if (response.folders) {
          this.model.folder = response.folders[0];
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
      this.observation.setValue(this.model.observation);
      this.evidence_link.setValue(this.model.evidence_link);
      this.qualification.setValue(this.model.qualification);
      this.re_expiration_date.setValue(new Date(this.model.re_expiration_date));

      this.files = [];
      if (this.model.evidence_file) {
        this.files.push({name:this.model.functionary.name, evidence_file:this.model.evidence_file})
      }

      this.active.setValue(this.model.active);
      if (this.model.functionary) {
        this.functionary.setValue(this.model.functionary);
      }
      if (this.model.folder) {
        this.folder.setValue(this.model.folder);
      }
    } else {
      if (this.folderId) {
        this.GetFolderById(this.folderId);
      }
    }

    if(this.groupId === 3){
      this.qualification.setValidators(Validators.compose([Validators.required, Validators.minLength(1)]))
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
    model.re_expiration_date = this.formatDate(this.re_expiration_date.value);
    model.active = this.model.active;
    if (this.model.functionary) {
      model.functionary = this.model.functionary.id;
    }
    if (this.model.folder) {
      model.folder = this.model.folder.id;
    }

    model.evidence_file = this.fileBase64;

    const sbUpdate = this.modelsService.patch(this.id, model, this.files).pipe(
      tap(() => {
        this.toastService.growl('success', 'success');
        if (this.saveAndExit) {
          if(this.parent){
            this.router.navigate([this.parent + '/evidences']);
          } else {
            this.router.navigate(['/evidences']);
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
      this.model = response.evidence
    });
    this.subscriptions.push(sbUpdate);
  }

  create() {
    this.requesting = true;

    let model = this.model;
    model.active = this.active.value;
    model.evidence_file = this.fileBase64;

    if (this.model.functionary) {
      model.functionary = this.model.functionary.id;
    }

    model.re_expiration_date = undefined;
    if (this.re_expiration_date.value) {
      model.re_expiration_date = this.formatDate(this.re_expiration_date.value);
    }

    model.folder = this.model.folder.id;
    
    const sbCreate = this.modelsService.post(model).pipe(
      tap(() => {
        this.toastService.growl('success', 'success');
        if (this.saveAndExit) {
          if(this.parent){
            this.router.navigate([this.parent + '/evidences']);
          } else {
            this.router.navigate(['/evidences']);
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
      this.model = response.evidence as Model
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

  public onSelect(event) {
    this.files = []
    for(let file of event.files) {
      this.files.push(file);
    }
    this.convertFile(event.files[0]).subscribe(base64 => {
      this.fileBase64 = 'data:' + this.files[0].type + ';base64,' + base64;
    });    
  }

  public showFile(url) {
    window.open(url, '_blank');
  }    

  convertFile(file : File) : Observable<string> {
    const result = new ReplaySubject<string>(1);
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = (event) => result.next(btoa(event.target.result.toString()));
    return result;
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

  GetFolderById(id) {
    this.folderService.getById(id).toPromise().then(
      response => {
        this.folder.setValue(response.folder)
      },
      error => {
        console.log('error getting folder');
      }
    );
  }
}
