import Ember from 'ember';


export default Ember.Route.extend({
eStore: Ember.inject.service(),

  model(params) {

  return this.store.findRecord('product', params.product_id);

},
actions: {
  addToCart(product){
    this.get('eStore').add(product);
  },
  saveRating(params){
    var newRating = this.store.createRecord('rating', params);
    var product = params.product;
    product.get('ratings').addObject(newRating);
    newRating.save().then(function(){
      return product.save();
    });
    debugger;
    this.transitionTo('item', params.product.id);
  },
  saveReview(params){
    var newComment = this.store.createRecord('comment', params);
    var product = params.product;
    product.get('comments').addObject(newComment);
    newComment.save().then(function(){
      return product.save();
    });
    debugger;
    this.transitionTo('item', params.product.id);
  }
}

});
