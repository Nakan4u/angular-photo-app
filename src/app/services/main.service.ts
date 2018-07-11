import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MainService {
  private API_KEY: string = '7689962-059ef4a23ea05886a72c3a85d';
  apiPhotos: string = "https://pixabay.com/api/?key=" + this.API_KEY;
  apiEndpoint: string = "http://127.0.0.1:5000";
  private headers: Headers = new Headers({ 'Content-Type': 'application/json' });
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

    return this.http.get(this.apiPhotos, { params })
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

  saveItem(item: SearchItem): any {
    let index = this.searchItemOnTheList(item);
    let url: string = `${this.apiEndpoint}/favorites`;

    // if item not found than add it to the list
    if (index < 0) {
      return this.http.post(url, item, { headers: this.headers, withCredentials: true }).toPromise()
        .then(res => {
          this.favorites.push(item);
        })
        .catch(err => {
          console.error('error with a favorite item', err);
        });
    }
  }

  removeItem(item: SearchItem) {
    let index = this.searchItemOnTheList(item);
    let url: string = `${this.apiEndpoint}/favorites/delete`;
    // if item found than remove it from the list

    if (index > 0) {
      return this.http.post(url, {"photoId": item['photoId']}, { headers: this.headers, withCredentials: true }).toPromise()
        .then(res => {
          console.info(res);
          this.favorites.splice(index, 1);
        })
        .catch(err => {
          console.error('error with delete photo', err);
        });
    }
  }

  private searchItemOnTheList(item): number {
    return this.favorites.findIndex(favorite => {
      return favorite['photoId'] === item.id || favorite.id === item.id;
    });
  }

  getFavorites(): Observable<SearchItem[]> {
    let url: string = `${this.apiEndpoint}/favorites`;

    return this.http.get(url, { headers: this.headers, withCredentials: true })
      .map(res => {
        console.log("result", res.json());
        this.favorites = res.json();
        return this.favorites;
      });
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