export class CurrencyValueConverter {
  toView(value){
    return value && value.toLocaleString('en-us',{style: 'currency', currency : 'USD'});
  }
}
export class ImagePathValueConverter {
  toView(value){
    return value && 'content/Images/Food/' + value + '.jpg';
  }
}
