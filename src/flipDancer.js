var FlipDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

FlipDancer.prototype = Object.create(Dancer.prototype);
FlipDancer.prototype.constructor = FlipDancer;

FlipDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this
  // new version of step
  Dancer.prototype.step.call(this);

  this.$node.removeClass('flip-scale-2-hor-top');
  this.$node.addClass('flip-scale-2-hor-top');

};