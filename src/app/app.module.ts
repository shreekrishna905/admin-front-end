import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {IcheckDirective} from './directive/icheckdirective';
import {HomeComponent, childRoutes} from './home/home.component';
import {AUTH_PROVIDERS} from './login/auth.service';
import {LoggedInGuardService} from './login/logged-in-guard.service';
import {LoginComponent} from './login/login.component';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {HttpModule} from '@angular/http';
import {Routes, RouterModule} from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProfileComponent} from './home/profile/profile.component';
import {SearchComponent} from './home/search/search.component';
import {MainComponent} from './home/main/main.component';
const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent, canActivate: [LoggedInGuardService], children: childRoutes}
];

@NgModule({
  declarations: [
    IcheckDirective,
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    SearchComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [
    AUTH_PROVIDERS,
    LoggedInGuardService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {}
