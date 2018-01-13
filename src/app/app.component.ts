import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private API_KEY = '7689962-059ef4a23ea05886a72c3a85d';
  private apiRoot: string = "https://pixabay.com/api/?key=" + this.API_KEY;
  title = 'Photo app';

  constructor(private http: Http) {
  }

  ngOnInit() {
    this.getPhotos();
  }

  getPhotos() {
    console.log("GET");
    let url = `${this.apiRoot}`;
    this.http.get(url).subscribe(res => console.log(res.json())); 
  }
}
