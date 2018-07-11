import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css']
})
export class FavoritesPageComponent implements OnInit {
  private loading: boolean = false;
  private photos: any = [];
  private isNoResult: boolean;

  constructor(
    private photosService: MainService,
  ) { }

  ngOnInit() {
    this.photosService.getFavorites()
      .subscribe(results => {
        this.photos = results;
        this.isNoResult = !results.length;
      });

  }

  changeLoadingState(value: boolean) {
    this.loading = value;
  }

  // onSearchFinished(results: SearchItem[]) {
  //   this.photos = results;
  //   this.isNoResult = !results.length;
  // }

}
