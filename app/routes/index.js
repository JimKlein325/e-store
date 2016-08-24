import Ember from 'ember';

export default Ember.Route.extend({
  eStore: Ember.inject.service(),


  model(){
    return this.store.findAll('product');
  },
  actions: {
    addToCart(product){
      this.get('eStore').add(product);
    }
  }

});
