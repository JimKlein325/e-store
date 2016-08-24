import DS from 'ember-data';

export default DS.Model.extend({
  value: DS.attr('number'),
  product: DS.belongsTo('product', {async: true})

});
