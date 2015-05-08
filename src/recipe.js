import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class Recipe
{
    recipe = null;
    url = 'data/recipe.json';

    constructor(http){
        this.http = http;
    }

    activate() {
        return this.http.get(this.url).then(response => {
            this.recipe = response.content;
        });
    }
}
    
export class CurrencyValueConverter {
    toView(value)
    {
        return value && value.toLocaleString('en-us',{style: 'currency', currency : 'USD'});
    }
}
export class ImagePathValueConverter {
    toView(value)
    {
        return value && 'content/Images/Food/' + value + '.jpg';
    }
}
