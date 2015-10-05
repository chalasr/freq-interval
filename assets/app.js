(function() {
  var MainCtrl;
  MainCtrl = function() {
    var currentDay;
    var currentDay, duration, vm;
    vm = MainCtrl.prototype = this;
    currentDay = (new Date).getDate();
    duration = 129600;
    currentDay = 13;
    this.workDays = [];
    this.depends = [];
    this.depCounters = [];
    this.workDays[13] = {
      count: 0,
      final: 173844
    };
    this.workDays[14] = {
      count: 173844,
      final: 352572
    };
    this.workDays[15] = {
      count: 352572,
      final: 547800
    };
    this.workDays[16] = {
      count: 547800,
      final: 707916
    };
    this.workDays[17] = {
      count: 707916,
      final: 707916
    };
    this.count = this.workDays[currentDay].count;
    this.finalCount = this.workDays[currentDay].final;
    this.increment = this.finalCount / duration;
    this.depends[1] = {
      count: Math.round(vm.count * 40.5),
      final: Math.round(vm.finalCount * 40.5)
    };
    this.depends[2] = {
      count: Math.round(vm.count * 3.5),
      final: Math.round(vm.finalCount * 3.5)
    };
    this.depends[3] = {
      count: Math.round(vm.count * 118.5),
      final: Math.round(vm.finalCount * 118.5)
    };
    this.myInterval = setInterval((function() {
      if (vm.mainCounter.getValue() + vm.increment < vm.finalCount) {
        vm.count = vm.mainCounter.getValue();
      } else {
        vm.stopCounters();
      }
    }), 250);
    this.mainCounter = new flipCounter('mainCounter', {
      value: this.count,
      inc: this.increment,
      pace: 250
    });
    vm.depends.forEach(function(dep, key) {
      dep.increment = dep.final / duration;
      vm.depCounters[key] = new flipCounter(key + 'Counter', {
        value: dep.count,
        inc: dep.increment,
        pace: 250
      });
    });
    this.stopCounters = function() {
      vm.mainCounter.stop();
      vm.mainCounter.setValue(this.finalCount);
      angular.forEach(vm.depCounters, function(counter) {
        counter.stop();
        counter.setValue(counter.final);
      });
      clearInterval(vm.myInterval);
      vm.count = vm.finalCount;
    };
  };
  new MainCtrl;
})();
