import Ember from 'ember';

export function ratingsAverage(params/*, hash*/) {
  var ratings = params[0];
  // console.log(params[0]);
  debugger;
  var total = 0;
  ratings.forEach(function(rating){
    // console.log(rating.get('rating'));
    total += parseInt(rating.get('rating'));
    // console.log(total);
  });
  var average = total/ratings.length;
  // console.log(average);

  return  Ember.String.htmlSafe('<span>' + average + '</span>');
}

export default Ember.Helper.helper(ratingsAverage);
