import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SearchService, SearchItem } from '../search.service';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute} from "@angular/router";

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
      
    this.route.params.subscribe(params => this.doSearch(params['term']));
  }

  ngOnInit() {
    this.searchField = new FormControl();

    this.searchField.valueChanges
      .debounceTime(1000)
      .distinctUntilChanged()
      .subscribe(value => this.onSearch(value));
  }

  doSearch(term: string) {
    this.changeLoadingState.emit(true)
    this.photosService.search(term)
      .subscribe(value => {
        this.onSearchFinished.emit(value)
        this.changeLoadingState.emit(false)
      });
  }

  onSearch(term:string) {
    this.router.navigate(['search', term]); 
  }

}
