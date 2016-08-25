import Ember from 'ember';

export default Ember.Component.extend({
  updateForm: false,
    actions:{

      showForm(){
        this.set('updateForm', true);
      },
      orderMore(product){
        var params = {
          quanity: this.get('quantity'),
          product: this.get('product')
        };
        this.set('updateForm', false);
        this.sendAction('orderMore', params);
      }
    }

});
