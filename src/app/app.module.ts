import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {ReactiveFormsModule, FormControl, FormsModule} from '@angular/forms';
import {Routes, RouterModule} from "@angular/router";


import { AppComponent } from './app.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { SearchService } from './search.service';
import { HeaderComponent } from './header/header.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { IllustrationsListComponent } from './search-result/illustrations-list/illustrations-list.component';
import { VectorGraphicsListComponent } from './search-result/vector-graphics-list/vector-graphics-list.component';
import { PhotosListComponent } from './search-result/photos-list/photos-list.component';
import { UserService, OnlyLoggedInUsersGuard } from './user.service';


const routes:Routes = [
	{path: '', redirectTo: 'home', pathMatch: 'full'}, 
	{path: 'find', redirectTo: 'search'}, 
  {path: 'home', component: HomePageComponent},
  {path: 'search', component: SearchPageComponent,
  // {path: 'search/:term', component: SearchPageComponent,
    children: [
      {path: 'all', redirectTo: 'photo'},
      {path: 'photo', component: PhotosListComponent},
      {path: 'illustration', component: IllustrationsListComponent}, 
      {path: 'vector', component: VectorGraphicsListComponent, canActivate: [OnlyLoggedInUsersGuard]}, 
    ]
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
    IllustrationsListComponent,
    VectorGraphicsListComponent,
    PhotosListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [SearchService, UserService, OnlyLoggedInUsersGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
