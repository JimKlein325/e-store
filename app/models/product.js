import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  category: DS.belongsTo('category', {async:true}),
  description: DS.attr(),
  price: DS.attr('number'),
  comments: DS.hasMany('comment', {async:true}),
  ratings: DS.hasMany('rating', {async:true})

});
