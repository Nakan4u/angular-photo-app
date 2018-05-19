import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MainService {
  private API_KEY: string = '7689962-059ef4a23ea05886a72c3a85d';
  apiRoot: string = "https://pixabay.com/api/?key=" + this.API_KEY;
  results: SearchItem[];
  favorites: SearchItem[];
  loading: boolean;

  constructor(private http: Http) {
    this.results = [];
    this.favorites = [];
    this.loading = false;
  }

  search(term: string, type: string): Observable<SearchItem[]> {
    let params = new URLSearchParams();
    params.set('q', term);
    params.set('per_page', '10');
    if (type) params.set('image_type', type); 

    return this.http.get(this.apiRoot, { params })
      .map(res => {
        return res.json().hits.map(item => {
          return new SearchItem(
            item.id,
            item.pageURL,
            item.previewURL,
            item.previewWidth,
            item.previewHeight,
            item.tags
          );
        });
      });
  }

  saveItem(item: SearchItem) {
    let index = this.searchItemOnTheList(item);
    debugger;
    // if item not found than add it to the list
    if (index < 0) {
      this.favorites.push(item);
    }
  }

  removeItem(item: SearchItem) {
    let index = this.searchItemOnTheList(item);
    // if item found than remove it from the list
    if (index > 0) {
      this.favorites.splice(index, 1);
    }
  }

  private searchItemOnTheList(item): number {
    return this.favorites.findIndex(favorite => {
      return favorite.id === item.id;
    });
  }

  getFavorites() {
    return this.favorites;
  }
}

export class SearchItem {
  constructor(
    public id: number,
    public pageURL: string,
    public previewURL: string,
    public previewWidth: number,
    public previewHeight: number,
    public tags: string
  ) { }
}