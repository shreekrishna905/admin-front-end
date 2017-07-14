import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IcheckDirective } from './directive/icheckdirective';
import { HomeComponent } from './home/home.component';
import { AUTH_PROVIDERS } from './login/auth.service';
import { LoggedInGuardService } from './login/logged-in-guard.service';
import { LoginComponent } from './login/login.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
   { path: 'home', component: HomeComponent, canActivate: [LoggedInGuardService] }
];

@NgModule({
  declarations: [
    IcheckDirective,
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
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
    { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
