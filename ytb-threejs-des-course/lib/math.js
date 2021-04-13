let intervalBetween = function () {
  this.increase = (Math.PI * 2) / 100;
  this.cur = 0;
  this.result = 0;
  this.interval;
  this.calc = function (times = 1) {
    this.cur += this.increase * times;
    this.result = Math.sin(this.cur) / 2 + 0.5;
  };
  this.start = function () {
    this.interval = setInterval(() => {
      this.calc();
    }, 100);
  };
  this.clear = function () {
    clearInterval(this.interval);
  };
};
