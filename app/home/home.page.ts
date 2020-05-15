import { Component } from '@angular/core';
import {DataserviceService} from '../dataservice.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  splash = true;
  postList = [];
  articleList = [];
  quoteList = [];


  constructor(public dataservice: DataserviceService) {
    setTimeout(() => this.splash = false, 2000);
    this.dataservice.getWeather().subscribe(async (data) => {
      this.postList = await data;
    });

    this.dataservice.getNews().subscribe(async (data) => {
      this.articleList = await data;
    });
    this.dataservice.getQuote().subscribe(async (data) => {
      // @ts-ignore
      this.quoteList = await data;
    });
  }

}
