import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    orderMore(params){
      var test = params.product;//.get('quantity');
      debugger;
      this.sendAction('orderMore', params);
    }
  }
});
