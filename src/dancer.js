// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  
  // use jQuery to create an HTML <span> tag  
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.location = { 
    top: top, 
    left: left, 
  };
  this.setPosition();
  this.step();
};

Dancer.prototype.setPosition = function() {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  // debugger
  var styleSettings = {
    top: this.location.top,
    left: this.location.left,
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.lineUp = function(i) {
  this.location.top = 430;
  this.location.left = $('#foreground').width() * (i + 0.25) / window.dancers.length;
  this.$node.animate({ 
    top: this.location.top,
    left: this.location.left,
    height: '200px'
  }, { duration: 800 });

  // this.setPosition();
  // this.$node.css({  });
};
