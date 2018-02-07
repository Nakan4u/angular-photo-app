import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {ReactiveFormsModule, FormControl, FormsModule} from '@angular/forms';
import {Routes, RouterModule} from "@angular/router";


import { AppComponent } from './app.component';
import { SearchFormComponent } from './search-page/search-form/search-form.component';
import { SearchService } from './search.service';
import { HeaderComponent } from './header/header.component';
import { SearchResultComponent } from './search-page/search-result/search-result.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { LoginFormComponent } from './login-form/login-form.component';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';



const routes:Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'}, 
  {path: 'home', component: HomePageComponent},
  {path: 'login', component: LoginFormComponent},
	{path: 'find', redirectTo: 'search'},
  {path: 'search', 
    component: SearchPageComponent, 
    canActivate: [AuthGuard]
  },
  {path: '**', component: HomePageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    HeaderComponent,
    SearchResultComponent,
    HomePageComponent,
    SearchPageComponent,
    LoginFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [SearchService, AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
