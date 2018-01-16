import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SearchService, SearchItem } from '../search.service';
import {FormControl} from '@angular/forms';
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

  constructor(private photosService:SearchService) { }

  ngOnInit() {
    this.searchField = new FormControl();

    this.searchField.valueChanges
      .debounceTime(1000)
      .distinctUntilChanged()
      .do( () => this.changeLoadingState.emit(true))
      .switchMap( term => this.photosService.search(term))
      .do( () => this.changeLoadingState.emit(false))
      .subscribe( value => this.onSearchFinished.emit(value));
  }

}
