describe('BlinkyDancer', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new BlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });

  describe('id cleanup after adventure', function() {
    it('should remove relevant instance references from global dancers array on 1st pass', function() {
      var rick2 = new BlinkyDancer(10, 20, 1000);
      var kenny1 = new FlipDancer(40, 100, 1000);
      adventure();
      setTimeout(function() {
        expect(window.dancers.length === 1);
      }, 5000);
      
    });

    it('should remove relevant instance references from global dancers array on 2nd pass', function() {
      var rick2 = new BlinkyDancer(10, 20, 1000);
      var kenny1 = new FlipDancer(40, 100, 1000);
      adventure();
      var rick3 = new BlinkyDancer(10, 20, 1000);
      var kenny2 = new FlipDancer(40, 100, 1000);
      adventure();
      setTimeout(function() {
        expect(window.dancers.length === 1);
      }, 5000);
      
    });  
  
  });

});
