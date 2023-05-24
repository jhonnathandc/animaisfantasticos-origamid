export default class Operation {
  constructor(operation, activeClass) {
    this.operation = document.querySelector(operation);
    this.activeClass = activeClass;
  }

  operationData() {
    this.daysWeek = this.operation.dataset.week.split(",").map(Number);
    this.timesWeek = this.operation.dataset.time.split(",").map(Number);
  }

  nowData() {
    this.nowDate = new Date();
    this.nowDay = this.nowDate.getDay();
    this.nowTime = this.nowDate.getUTCHours() - 3;
  }

  itOpen() {
    const weekOpened = this.daysWeek.indexOf(this.nowDay) !== -1;
    const timeOpened =
      this.nowTime >= this.timesWeek[0] && this.nowTime < this.timesWeek[1];
    return weekOpened && timeOpened;
  }

  activeOpen() {
    if (this.itOpen()) {
      this.operation.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.operation) {
      this.operationData();
      this.nowData();
      this.activeOpen();
    }
    return this;
  }
}
