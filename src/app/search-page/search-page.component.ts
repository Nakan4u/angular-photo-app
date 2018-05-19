import { Component, OnInit } from '@angular/core';
import { SearchItem } from '../services/main.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  private loading: boolean = false;
  private photos: any = [];
  private term: string;
  private type: string;
  private isNoResult: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['term']) {
        this.term = params['term'];
      }
      if (params['type']) {
        this.type = params['type'];
      }
    })
  }

  changeLoadingState(value: boolean) {
    this.loading = value;
  }

  onSearchFinished(results: SearchItem[]) {
    this.photos = results;
    this.isNoResult = !results.length;
  }

}

