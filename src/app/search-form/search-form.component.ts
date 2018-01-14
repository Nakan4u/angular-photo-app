import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  private loading: boolean = false;
  private photos: any = [];

  constructor(private photosService:SearchService) { }

  ngOnInit() {
  }

  doSearch(term:string, event) {
    event.preventDefault();
    this.loading = true;
    this.photosService.search(term)
      .then(results => {
        this.photos = results;
        this.loading = false;
      })
  }

}
