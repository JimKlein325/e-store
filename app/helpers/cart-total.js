import Ember from 'ember';

export function cartTotal(params/*, hash*/) {


  var products = params[0];
  var total = 0;
  products.forEach(function(product){
    debugger;
    total += product.get('price');
  });
debugger;
  return Ember.String.htmlSafe('<span>' + total + '</span>');

}

export default Ember.Helper.helper(cartTotal);
