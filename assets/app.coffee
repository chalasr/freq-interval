do ->

  MainCtrl = ->
    `var currentDay`
    vm = MainCtrl.prototype = this
    currentDay = (new Date).getDate()
    duration = 129600
    # number of intervals during 9hours (1 interval = 1/4 sec = 250miliseconds)
    currentDay = 13
    # TO BE REMOVED
    @workDays = []
    @depends = []
    @depCounters = []
    @workDays[13] =
      count: 0
      final: 173844
    @workDays[14] =
      count: 173844
      final: 352572
    @workDays[15] =
      count: 352572
      final: 547800
    @workDays[16] =
      count: 547800
      final: 707916
    @workDays[17] =
      count: 707916
      final: 707916
    @count = @workDays[currentDay].count
    @finalCount = @workDays[currentDay].final
    @increment = @finalCount / duration
    @depends[1] =
      count: Math.round(vm.count * 40.5)
      final: Math.round(vm.finalCount * 40.5)
    @depends[2] =
      count: Math.round(vm.count * 3.5)
      final: Math.round(vm.finalCount * 3.5)
    @depends[3] =
      count: Math.round(vm.count * 118.5)
      final: Math.round(vm.finalCount * 118.5)
    @myInterval = setInterval((->
      if vm.mainCounter.getValue() + vm.increment < vm.finalCount then (vm.count = vm.mainCounter.getValue()) else vm.stopCounters()
      return
    ), 250)
    @mainCounter = new flipCounter('mainCounter',
      value: @count
      inc: @increment
      pace: 250)
    vm.depends.forEach (dep, key) ->
      dep.increment = dep.final / duration
      vm.depCounters[key] = new flipCounter(key + 'Counter',
        value: dep.count
        inc: dep.increment
        pace: 250)
      return

    @stopCounters = ->
      vm.mainCounter.stop()
      vm.mainCounter.setValue @finalCount
      angular.forEach vm.depCounters, (counter) ->
        counter.stop()
        counter.setValue counter.final
        return
      clearInterval vm.myInterval
      vm.count = vm.finalCount
      return

    return

  new MainCtrl
  return
