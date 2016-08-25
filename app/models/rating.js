import DS from 'ember-data';

export default DS.Model.extend({
  rating: DS.attr('number'),
  product: DS.belongsTo('product', {async: true})

});
