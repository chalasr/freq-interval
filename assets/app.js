

(function(app) {

    function MainCtrl($interval) {
        var vm = this;
        var workDays = this.workDays = [];
        var currentDate = new Date();
        var currentDay = new Date().getDate();
        var fullTime = 129600; // number of intervals during 9hours (1 interval = 1/4 sec = 250miliseconds) 
        var day = 13;
        for (var i = 1; i < 6; i++) {
            if(day < 19) {
                workDays[day] = {};
            }
        }
        var currentDay = 14; // TO BE REMOVED
        this.depCounters = [];
        this.workDays[13] = { count: 0, final: 173844 };
        this.workDays[14] = { count: 173844, final: 352572 };
        this.workDays[15] = { count: 352572, final: 547800 };
        this.workDays[16] = { count: 547800, final: 707916 };
        this.workDays[17] = { count: 707916, final: 707916 };
        this.count = this.workDays[currentDay].count;
        this.finalCount = this.workDays[currentDay].final;
        this.increment = this.finalCount / fullTime;
        this.depends = {
            1: {
                count: Math.round(vm.count * 40.5),
                final: Math.round(vm.finalCount * 40.5),
            },
            2: {
                count: Math.round(vm.count * 3.5),
                final: Math.round(vm.finalCount * 3.5),
            },
            3: {
                count: Math.round(vm.count * 118.5),
                final: Math.round(vm.finalCount * 118.5),
            }
        };
        this.myInterval = $interval(function() {
            ((vm.mainCounter.getValue() + vm.increment) < vm.finalCount) ? vm.count = vm.mainCounter.getValue() : vm.stopCounters();
        }, 250);
        this.mainCounter = new flipCounter('mainCounter', {value: this.count, inc: this.increment, pace: 250, auto: true});
        angular.forEach(vm.depends, function(dep, key) {
            dep.increment = dep.final / fullTime;
            vm.depCounters[key] = new flipCounter(key+'Counter', {value: dep.count, inc: dep.increment, pace: 250, auto: true});
        });
        this.stopCounters = function() {
            vm.mainCounter.stop();
            vm.mainCounter.setValue(this.finalCount);
            angular.forEach(vm.depCounters, function(counter) {
                counter.stop();
                counter.setValue(counter.final);
            });
            $interval.cancel(vm.myInterval);
            vm.count = vm.finalCount;
        };
    };

    app.controller('MainCtrl', MainCtrl);

})(angular.module('aliapur', []));
