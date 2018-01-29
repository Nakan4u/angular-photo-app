import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SearchService, SearchItem } from '../search.service';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  @Output() onSearchFinished = new EventEmitter<SearchItem[]>();
  @Output() changeLoadingState = new EventEmitter<boolean>();
  private searchField: FormControl;

  constructor(
    private photosService: SearchService,
    private router: Router,
    private route: ActivatedRoute) {

    this.route.params.subscribe(params => {
      if (params['term']) {
        this.doSearch(params['term'], params['type'] || 'all')
      }
    });
  }

  ngOnInit() {
    this.searchField = new FormControl();
    this.searchField.valueChanges
      .debounceTime(1000)
      .distinctUntilChanged()
      .subscribe(value => this.onSearch(value));
  }

  doSearch(term: string, type: string) {
    if (term) {
      this.router.navigate(['search', { term, type }]);
      this.changeLoadingState.emit(true)
      this.photosService.search(term, type)
        .subscribe(value => {
          this.onSearchFinished.emit(value)
          this.changeLoadingState.emit(false)
        });
    }
  }

  onSearch(term: string) {
    this.router.navigate(['search', {term}]);
  }

}
