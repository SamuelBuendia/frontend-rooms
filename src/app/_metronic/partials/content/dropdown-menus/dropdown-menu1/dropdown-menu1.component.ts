import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/modules/auth';

@Component({
  selector: 'app-dropdown-menu1',
  templateUrl: './dropdown-menu1.component.html',
})
export class DropdownMenu1Component implements OnInit {
  public divisions;
  public division;

  change$: Observable<boolean>;

  constructor(
    public authService: AuthService,
  ) {
    this.divisions = [];
  }

  ngOnInit(): void {
    this.divisions = this.authService.currentUserValue.functionary;

  }

  changeDivision(division) {
  }
}
