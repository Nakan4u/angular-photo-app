import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {ReactiveFormsModule, FormControl, FormsModule} from '@angular/forms';
import {Routes, RouterModule} from "@angular/router";
import { NotifierModule } from 'angular-notifier';

import { AppComponent } from './app.component';
import { SearchFormComponent } from './search-page/search-form/search-form.component';
import { HeaderComponent } from './header/header.component';
import { SearchResultComponent } from './search-page/search-result/search-result.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';
import { RegisterFormComponent } from './register-form/register-form.component';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AuthService } from './services/auth.service';
import { Auth2Service } from './services/auth2.service';
import { AuthGuard } from './services/auth-guard.service';
import { MainService } from './services/main.service';





const routes:Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'}, 
  {path: 'home', component: HomePageComponent},
  {path: 'login', component: LoginFormComponent},
  {path: 'register', component: RegisterFormComponent},
	{path: 'find', redirectTo: 'search'},
  {path: 'search', 
    component: SearchPageComponent, 
    canActivate: [AuthGuard]
  },
  {path: 'favorites', 
    component: FavoritesPageComponent, 
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
    FavoritesPageComponent,
    RegisterFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes, {useHash: true}),
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NotifierModule
  ],
  providers: [MainService, AuthGuard, AuthService, Auth2Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
