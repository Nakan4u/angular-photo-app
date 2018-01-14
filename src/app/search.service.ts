import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, URLSearchParams } from '@angular/http';
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

  search(term: string) {
    let promise = new Promise((resolve, reject) => {
      let params = new URLSearchParams();
      params.set('q', term);
      params.set('per_page', '10');
      this.http.get(this.apiRoot, { params })
        .toPromise()
        .then(res => { // Success
          var results;
          console.log(res.json());
          results = res.json().hits.map(item => { 
            return new SearchItem(
                item.pageURL,
                item.previewURL,
                item.previewWidth,
                item.previewHeight,
                item.tags
            );
          });
          resolve(results);
        })
        .catch(msg => { // Error
          reject(msg);
        });
    });
    return promise;
  }
}

export class SearchItem {
  constructor(
    public pageURL: string,
    public previewURL: string,
    public previewWidth: string,
    public previewHeight: string,
    public tags: string
  ) {}
}