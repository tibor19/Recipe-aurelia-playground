import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class Recipe
{
		recipe = null;
		url = 'http://recipewebapi.azurewebsites.net/api/recipes/';

		constructor(http){
				this.http = http;
		}

		activate(data) {
			console.log(data);
			var id = 0;
      if(data && data.id){
				id = data.id;
			}
      else{
        id = Math.floor((Math.random() * 9) + 1).toString();
      }

      return this.http.get(this.url + id).then(response => {
        this.recipe = response.content;
      });
		}
}
