import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)

export class WeeklyMenu
{
  recipes = null;
  url = 'data/recipes.json';

  constructor(http){
    this.http = http;
  }

  activate() {
    return this.http.get(this.url).then(response => {
      this.recipes = response.content.map(r => r.weekday = weekdays[r.id % 7]);
    });
  }
}
