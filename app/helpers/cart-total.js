import Ember from 'ember';

export function cartTotal(params/*, hash*/) {


  var products = params[0];
  var total = 0;
  products.forEach(function(product){
    total += product.get('price');
  });
  return Ember.String.htmlSafe('<span>' + total + '</span>');

}

export default Ember.Helper.helper(cartTotal);
