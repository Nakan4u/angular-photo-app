import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SearchService, SearchItem } from '../search.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  @Output() onSearchFinished = new EventEmitter<SearchItem[]>();
  @Output() changeLoadingState = new EventEmitter<boolean>();

  constructor(private photosService:SearchService) { }

  ngOnInit() {
  }

  doSearch(term:string, event) {
    event.preventDefault();
    this.changeLoadingState.emit(true);

    this.photosService.search(term)
      .then((results: SearchItem[]) => {
        this.changeLoadingState.emit(false);
        this.onSearchFinished.emit(results);
      })
  }

}
