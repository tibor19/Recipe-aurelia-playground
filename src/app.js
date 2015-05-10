import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
  configureRouter(config, router){
    config.title = 'Aurelia';

    config.map([
      { route: ['','home'],     moduleId: './home',        nav: true, title:'Home' },
      { route: 'search',        moduleId: './search',      nav: true, title:'Search' },
      { route: 'recipe/:id',    moduleId: './recipe',      nav: false },
      { route: 'i-feel-lucky',  moduleId: './recipe',      nav: true, title: 'I feel lucky' },
      { route: 'top-recipe',    moduleId: './top-recipe',  nav: true, title: 'Top Recipe' },
      { route: 'weekly-menu',   moduleId: './weekly-menu', nav: true, title:'Weekly Menu' },
      { route: 'contact-us',    moduleId: './contact-us',  nav: true, title:'Contact Us' }
    ]);

    this.router = router;
  }
}
