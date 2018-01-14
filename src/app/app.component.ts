import { Component, OnInit } from '@angular/core';
import { SearchItem } from './search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private loading: boolean = false;
  private photos: any = [];

  constructor() { }

  ngOnInit() {
  }

  changeLoadingState(value: boolean) {
    this.loading = value;
  }

  onSearchFinished(results: SearchItem[]) {
    this.photos = results;
  }

}

