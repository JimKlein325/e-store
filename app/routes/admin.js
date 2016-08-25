import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('product');
  },
  actions: {
    orderMore(params)
    {
      var quantity = parseInt(params.quantity);//this.get('quantity'));

      console.log(quantity);
      //
      // for (var i=0; i<quantity; i++){
      //   var params = {
      //     sold: false,
      //     product: product
      //   };
      //   debugger;
      //   var newProductItem = this.store.createRecord('product-item', params);
      //   product.get('productItems').addObject(newProductItem);
      //   newProductItem.save().then(function() {
      //     return product.save();
      //   });
      // }
      // this.set('quantity',"");
      // this.transitionTo('admin', product.id);
    }
  }
});
