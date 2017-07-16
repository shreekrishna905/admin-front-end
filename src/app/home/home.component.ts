import { LogoutComponent } from './logout/logout.component';
import { MainComponent } from './main/main.component';
import {ProfileComponent} from './profile/profile.component';
import {SearchComponent} from './search/search.component';
import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {Router, Routes} from '@angular/router';

export const childRoutes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', component: MainComponent},
  { path: 'logout', component: LogoutComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'search', component: SearchComponent}
];

@Component({
  selector: 'app-home',
  host: {'class': 'hold-transition skin-blue layout-top-nav'},
  templateUrl: './home.component.html',
})

export class HomeComponent implements OnInit {
  searchForm: FormGroup;
  constructor(private router: Router, fb: FormBuilder) {
    this.searchForm = fb.group({
      'keyword': ['']
    });
  }
  ngOnInit() {
  }

}
