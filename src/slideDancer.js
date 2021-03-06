var SlideDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  // this.$node.removeClass('dancer');
  // this.$node.addClass('slideDancer');
  this.$node.html('<img src="http://mrwgifs.com/wp-content/uploads/2014/11/HQ-Carlton-Dance-With-a-Transparent-Background-Gif-From-The-Fresh-Prince-Of-Bel-Air.gif" />');
  var imgHeight = Math.floor(this.location.top / $('#foreground').height() * 400) + 80;
  this.$node.css({ height: (imgHeight + 'px') });

};

SlideDancer.prototype = Object.create(Dancer.prototype);
SlideDancer.prototype.constructor = SlideDancer;

SlideDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this
  // new version of step
  Dancer.prototype.step.call(this);

  if (this.$node.hasClass('slide-right')) {
    this.$node.removeClass('slide-right');
    this.$node.addClass('slide-left');
  } else {
    this.$node.removeClass('slide-left');
    this.$node.addClass('slide-right');
  }
};


SlideDancer.prototype.lineUp = function(i) {
  this.location.top = 280;
  var slideDancerPop = window.dancers.filter(function(d) { return d instanceof SlideDancer; }).length;
  this.location.left = $('#foreground').width() * (i + 0.25) / slideDancerPop;
  this.$node.animate({ 
    top: this.location.top,
    left: this.location.left,
    height: '250px'
  }, { duration: 800 });
};