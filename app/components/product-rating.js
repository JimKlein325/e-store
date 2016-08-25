import Ember from 'ember';

export default Ember.Component.extend({

  averageRatings: Ember.computed('product.ratings.@each.rating', function() {
    var total = 0;
    this.get('product.ratings').forEach(function(rating){
      total += Number(rating.get('rating'));
    });
    var average = total/this.get('product.ratings.length');//.toArray();
    return average;
  }),

  actions:{
    saveRating() {
      var params = {
        rating: this.get('rating'),
        product: this.get('product')
      };
      this.set('rating',"")
      this.sendAction('saveRating',params)
    }
  }
});
