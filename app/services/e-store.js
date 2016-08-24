import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  itemPrices: Ember.computed.map( 'items', function(product){
    return product.price;
  }),
  cartTotal: Ember.computed.sum("itemPrices"),//this.get('itemPrices')),

  add(product) {
    this.get('items').pushObject(product);
    //debugger;
  },


  // store: Ember.inject.service('store'),
  // products() {
  // debugger;
  // return this.get('store').findAll('product');
  // },
});
