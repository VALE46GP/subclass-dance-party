var lineUp = function() {
  window.dancers.forEach((dancer, i) => {
    if (dancer instanceof BlinkyDancer) {
      dancer.lineUp(i);
    }
  });
};

