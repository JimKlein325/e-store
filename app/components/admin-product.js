import Ember from 'ember';

export default Ember.Component.extend({

  action: {
    orderMore(params){
      this.sendAction('orderMore', params);
    }
  }
});
