import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    saveReview() {
      var params = {
        author: this.get('author'),
        text: this.get('text'),
        date: new Date("2016-08-08"),
        product: this.get('product')
      };
      this.set('author', "");
      this.set('text', "");
      this.sendAction('saveReview', params);
      }
    }
});
