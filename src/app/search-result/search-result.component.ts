import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SearchItem } from '../search.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  @Input('results') results: SearchItem[];
  private term: string;
  private type: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['term']) {
        this.term = params['term'];
      }
      if (params['type']) {
        this.type = params['type'];
      }
    })
  }

  searchByTag(tag: string, event) {
    event.preventDefault();
    this.router.navigate(['search', { term: tag }]);
  }
}
