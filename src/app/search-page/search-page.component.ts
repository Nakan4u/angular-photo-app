import { Component, OnInit } from '@angular/core';
import { SearchItem } from '../search.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  private loading: boolean = false;
  private photos: any = [];

  constructor() { }

  ngOnInit() {
  }

  changeLoadingState(value: boolean) {
    this.loading = value;
  }

  onSearchFinished(results: SearchItem[]) {
    this.photos = results;
  }

}

