class MainCtrl {

  constructor(config) {
    this.depends = [];
    this.depCounters = [];
    this.workDays = config.workDays;
    this.currentDay = (new Date).getDate > 13 ? (new Date).getDate() : 13 ;
    this.count = this.workDays[this.currentDay].count;
    this.duration = this.workDays[this.currentDay].duration;
    this.finalCount = this.workDays[this.currentDay].final;
    this.increment = this.finalCount / this.duration;
    this.depends[1] = {
      count: Math.round(this.count * 40.5),
      final: Math.round(this.finalCount * 40.5)
    };
    this.depends[2] = {
      count: Math.round(this.count * 3.5),
      final: Math.round(this.finalCount * 3.5)
    };
    this.depends[3] = {
      count: Math.round(this.count * 118.5),
      final: Math.round(this.finalCount * 118.5)
    };
  };

  startCounters() {
    var vm = this;
    this.mainCounter = new flipCounter('mainCounter', {
      value: this.count,
      inc: this.increment,
      pace: 250
    });
    this.depends.forEach((dep, key) => {
      dep.increment = dep.final / vm.duration;
      vm.depCounters[key] = new flipCounter('counter' + key, {
          value: dep.count,
          inc: dep.increment,
          pace: 250
      });
    });
  };

  stopCounters() {
    this.mainCounter.stop();
    this.mainCounter.setValue(this.finalCount);
    this.depCounters.forEach(counter => {
      counter.stop();
      counter.setValue(counter.final);
    });
    clearInterval(this.myInterval);
    this.count = this.finalCount;
  };

  myInterval() {
    setInterval(function() {
      if ((vm.mainCounter.getValue() + vm.increment) < vm.finalCount) {
        vm.count = vm.mainCounter.getValue();
      } else {
        vm.stopCounters();
      }
    }, 250);
  };

};

let params = new Config().getParameters();
let run = new MainCtrl({ workDays: params }).startCounters();
