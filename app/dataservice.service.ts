import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(public http: HttpClient) {}
  getNews() {
    const url = 'http://newsapi.org/v2/top-headlines?' +
        'country=us&' + 'pageSize=5&' +
        'apiKey=78fcfa91c1664bd0828c5d064347cbb9';
    return  this.http.get(url).pipe(map((res: Response ) => res['articles']));

  }
  getWeather() {
    const url = 'http://api.openweathermap.org/data/2.5/weather?zip=07306,us&units=metric&appid=6b1c861c56c68dbca73e2dd71b62af1b';

    return this.http.get(url).pipe(map((res: Response) => res['main']));
  }

  getQuote(){
    const url ='https://api.quotable.io/random';
    return  this.http.get(url).pipe(map((res: Response ) => res));
  }
}
