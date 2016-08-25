import DS from 'ember-data';

export default DS.Model.extend({
  sold: DS.attr('boolean'),
  product: DS.belongsTo('product', {async: true})
});
