import Ember from 'ember';

export default Ember.Component.extend({
  updateForm: false,
    actions:{

      showForm(){
        this.set('updateForm', true);
      },
      orderMore(){
        var params = {
          quantity: this.get('quantity'),
          product: this.get('product')
        };
        this.set('updateForm', false);
        debugger;
        this.sendAction('orderMore', params);
      }
    }

});
