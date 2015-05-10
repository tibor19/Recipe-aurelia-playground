import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {ImagePathValueConverter} from './converters';

@inject(HttpClient)

export class WeeklyMenu
{
  recipes = null;
  url = 'http://recipewebapi.azurewebsites.net/api/recipes/';


  constructor(http){
    this.http = http;
  }

  activate() {
    var weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    return this.http.get(this.url).then(response => {
      this.recipes = response.content;
      this.recipes.map((r, i) => r.weekday = weekdays[i % 7]);
      console.log(this.recipes);
    });
  }
}
