import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr(),
  author: DS.attr(),
  date: DS.attr('date'),
  product: DS.belongsTo('product', {async: true})

});
