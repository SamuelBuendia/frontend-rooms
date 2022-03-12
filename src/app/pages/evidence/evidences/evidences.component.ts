import { Component, OnInit } from '@angular/core';
import { EvidenceService as ModelService } from '../_services/evidence.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EvidenceModel as Model } from '../_models/evidence.model';
import { FormGroup, AbstractControl, FormBuilder, Validators, FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { LazyLoadEvent } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ToastService } from 'src/app/modules/toast/_services/toast.service';
import { AuthService } from 'src/app/modules/auth';

@Component({
    selector: 'app-evidences',
    templateUrl: './evidences.component.html',
    styleUrls: ['./evidences.component.scss']
})
export class EvidencesComponent implements OnInit {

    public promiseForm: Promise<any>;

    public models: Model[];
    public selectedModels: Model[];

    public page: number;
    public total_page: number;
    public per_page: number;
    public totalRecords: number;

    public sort: string;
    public query: string;
    public filters: { key: string, value: string }[];
    public _with: { key: string, value: string }[];

    public formGroup: FormGroup;
    public evidence_id_filter: AbstractControl;
    public department_id_filter: AbstractControl;
    public venue_id_filter: AbstractControl;

    searchGroup: FormGroup;

    public requesting: boolean;

    public confirmDialogPosition: string;
    public message_confirm_delete: string;

    public showTableCheckbox: boolean;

    public folderId: number;
    public parent: string;

    constructor(
        public modelsService: ModelService,
        public translate: TranslateService,
        private router: Router,
        private route: ActivatedRoute,
        private confirmationService: ConfirmationService,
        private toastService: ToastService,
        public authService: AuthService,
        fb: FormBuilder) {
        this.formGroup = fb.group({
            'evidence_id_filter': [''],
            'department_id_filter': [''],
            'venue_id_filter': [''],
        });
        this.evidence_id_filter = this.formGroup.controls['evidence_id_filter'];
        this.department_id_filter = this.formGroup.controls['department_id_filter'];
        this.venue_id_filter = this.formGroup.controls['venue_id_filter'];

        this.searchGroup = fb.group({
            searchTerm: [''],
        });

        this.translate.get('COMMON.MESSAGE_CONFIRM_DELETE').subscribe((res: string) => {
            this.message_confirm_delete = res;
        });

        this.showTableCheckbox = false;
        this.parent = '';

        this.page = 1;
        this.total_page = 0;
        this.per_page = 100
        this.totalRecords = 0;

        this.requesting = false;

        this.confirmDialogPosition = 'right';

        this.models = [];
        this.selectedModels = [];
        // this.getModels();
    }

    ngOnInit() {
        this.requesting = false;

        this._with = [];
        this._with.push({key: 'include[]', value: 'functionary.*'})
        this._with.push({key: 'include[]', value: 'folder.*'})
        this._with.push({key: 'include[]', value: 'teacher.*'})
    }

    public loadLazy(event?: LazyLoadEvent) {
        if (event) {
            this.page = (event.first / this.per_page) + 1;
            if (event.sortField) {
                if (event.sortOrder === -1) {
                    this.sort = '-' + event.sortField;
                } else {
                    this.sort = event.sortField;
                }
            } else {
                this.sort = '-id';
            }

            if (event.globalFilter) {
                this.query = event.globalFilter;
            } else {
                this.query = undefined;
            }

            if (event.rows) {
                this.per_page = event.rows;
            }    
        }

        this.filters = [];


        switch (this.authService.currentUserValue.groups[0].id) {
            case 3:
                this.filters.push({ key: 'filter{teacher}', value: this.authService.currentUserValue.functionary.id.toString() });
                break;
            case 2:
                this.filters.push({ key: 'filter{functionary}', value: this.authService.currentUserValue.functionary.id.toString() });
                break;
            default:
                break;
        }


        if (this.route.parent.parent.parent.snapshot.url.length > 0) {
            this.route.parent.parent.parent.params.subscribe((params) => {
                if (this.route.parent.parent.parent.parent.parent.snapshot.url.length > 0) {
                    this.folderId = params.id;
                    this.parent = '/' + this.route.parent.parent.parent.parent.parent.snapshot.url[0].path + '/edit/' + this.folderId;
                    this.filters.push({ key: 'filter{folder}', value: this.folderId.toString() })
                }
                this.getModels();
            });
        } else {
            this.getModels();
        }
    }

    public getModels() {
        this.requesting = true;
        this.modelsService.get(this.page, this.per_page, this.sort, this.query, this.filters, this._with).toPromise().then(
            response => {
                this.requesting = false;
                // this.models = response.evidences;
                this.models = [];
                response.evidences.forEach(element => {
                    this.models.push(element);
                });
                if(response.functionaries){
                    response.functionaries.forEach(functionary => {
                        this.models.forEach(element => {
                            if (element.functionary === functionary.id) {
                                element.functionary = functionary;
                            }
                        });
                    });
                }
                if(response.folders){
                    response.folders.forEach(folder => {
                        this.models.forEach(element => {
                            if (element.folder === folder.id) {
                                element.folder = folder;
                            }
                        });
                    });
                }
                this.totalRecords = response.meta.total_results;
            },
            error => {
                this.requesting = false;
                if (error.status == 404) {
                    this.toastService.growl('error', 'Not Found')
                } else {
                    let messageError = [];
                    if (!Array.isArray(error.error)) {
                        messageError.push(error.error);
                    } else {
                        messageError = error.error;
                    }
                    Object.entries(messageError).forEach(
                        ([key, value]) => this.toastService.growl('error', key + ': ' + value)
                    );
                }
            }
        );
    }

    // public showDeleteDialog(user: Model) {
    //     let message;
    //     this.translate.get('Do you want to delete?').subscribe((res: string) => {
    //         message = res;
    //     });

    //     let header;
    //     this.translate.get('Delete Confirmation').subscribe((res: string) => {
    //         header = res;
    //     });

    //     this.confirmationService.confirm({
    //         message: message,
    //         header: header,
    //         icon: 'fa fa-trash',
    //         accept: () => {
    //             this.delete(user);
    //         }
    //     });
    // }

    public delete(id) {
        this.modelsService.delete(id).toPromise().then(
            response => {
                this.toastService.growl('success', 'Delete');
                this.getModels();
            },
            error => {
                if (error.status == 404) {
                    this.toastService.growl('error', 'Not Found')
                } else {
                    let messageError = [];
                    if (!Array.isArray(error.error)) {
                        messageError.push(error.error);
                    } else {
                        messageError = error.error;
                    }
                    Object.entries(messageError).forEach(
                        ([key, value]) => this.toastService.growl('error', key + ': ' + value)
                    );
                }
            }
        );
    }

    public patch(values: Model) {
        const param = {
            // 'activated': values.activated
        };
        if (values) {
            const promise = this.modelsService.patch(values.id, param);
            this.promiseForm = promise.toPromise().then(
                response => {
                    this.toastService.growl('success', 'Patch');
                },
                error => {
                    if (error.status == 404) {
                        this.toastService.growl('error', 'Not Found')
                    } else {
                        let messageError = [];
                        if (!Array.isArray(error.error)) {
                            messageError.push(error.error);
                        } else {
                            messageError = error.error;
                        }
                        Object.entries(messageError).forEach(
                            ([key, value]) => this.toastService.growl('error', key + ': ' + value)
                        );
                    }
                }
            );
        }
    }

    confirm(id, evidence: string) {
        this.confirmDialogPosition = evidence;
        this.confirmationService.confirm({
            message: 'Are you sure that you want to delete?',
            accept: () => {
                this.delete(id);
            }
        });
    }
}
