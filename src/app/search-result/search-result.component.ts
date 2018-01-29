import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import { SearchItem } from '../search.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  @Input('results') results: SearchItem[];

  constructor(private router: Router) {}

  ngOnInit() {
  }

  searchByTag(tag: string, event) {
    event.preventDefault();
    this.router.navigate(['search', { term: tag }]);
  }
}
