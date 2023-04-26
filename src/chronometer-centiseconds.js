class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 10);
  }

  getMinutes() {
    const minutes = Math.floor(this.currentTime / 6000);

    return minutes;
  }

  getSeconds() {
    const seconds = Math.floor((this.currentTime % 6000) / 100);

    return seconds;
  }

  getCentiseconds() {
    const centiseconds = Math.floor(this.currentTime % 100);

    return centiseconds;
  }

  computeTwoDigitNumber(value) {
    let number = value.toString();
    if (number.length === 2) {
      return number;
    } else if (number.length === 1) {
      number = "0" + number;
      return number;
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let minutes = this.getMinutes();
    let seconds = this.getSeconds();
    let centiseconds = this.getCentiseconds();
    let mm = this.computeTwoDigitNumber(minutes);
    let ss = this.computeTwoDigitNumber(seconds);
    let SS = this.computeTwoDigitNumber(centiseconds);
    let split = `${mm}:${ss}.${SS}`;
    return split;
  }
}
