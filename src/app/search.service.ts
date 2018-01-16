import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SearchService {
  private API_KEY: string = '7689962-059ef4a23ea05886a72c3a85d';
  apiRoot: string = "https://pixabay.com/api/?key=" + this.API_KEY;
  results: Object[];
  loading: boolean;

  constructor(private http: Http) {
    this.results = [];
    this.loading = false;
  }

  search(term: string): Observable<SearchItem[]> {
    let params = new URLSearchParams();
    params.set('q', term);
    params.set('per_page', '10');

    return this.http.get(this.apiRoot, { params })
      .map(res => {
        return res.json().hits.map(item => {
          return new SearchItem(
            item.pageURL,
            item.previewURL,
            item.previewWidth,
            item.previewHeight,
            item.tags
          );
        });
      });
  }
}

export class SearchItem {
  constructor(
    public pageURL: string,
    public previewURL: string,
    public previewWidth: string,
    public previewHeight: string,
    public tags: string
  ) { }
}