import DS from 'ember-data';

export default DS.Model.extend({
  sold: DS.attr('bool'),
  product: DS.belongsTo('product', {async: true})
});
