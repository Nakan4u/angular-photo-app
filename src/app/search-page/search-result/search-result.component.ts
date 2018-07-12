import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MainService, SearchItem } from '../../services/main.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  @Input('results') results: SearchItem[];
  @Input('type') type: string;
  private queryTerm: string;
  private queryType: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private photosService: MainService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['term']) {
        this.queryTerm = params['term'];
      }
      if (params['type']) {
        this.queryType = params['type'];
      }
    })

    if (!this.type) { // get favorites for search page;
      this.photosService.getFavorites().subscribe();
    }
  }

  searchByTag(tag: string, event) {
    event.preventDefault();
    this.router.navigate(['search'], { queryParams: { term: tag } });
  }
 
  addToFavorites(item) {
    this.photosService.saveItem(item);
    item.isFavorite = true;
  }

  removeFromFavorites(item) {
    this.photosService.removeItem(item);
    item.isFavorite = false;
  }
}
