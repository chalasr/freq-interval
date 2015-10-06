class Config {

  constructor() {
    this.workDays = [];
    this.workDays[13] = {
      count: 0,
      final: 173844,
      duration: 129600
    };
    this.workDays[14] = {
      count: 173844,
      final: 352572,
      duration: 129600
    };
    this.workDays[15] = {
      count: 352572,
      final: 547800,
      duration: 129600,
    };
    this.workDays[16] = {
      count: 547800,
      final: 707916,
      duration: 129600
    };
    this.workDays[17] = {
      count: 707916,
      final: 707916,
      duration: 129600
    };
  };

  getParameters() {
    return this.workDays;
  };

};
