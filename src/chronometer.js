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
    }, 1000);
  }


  getMinutes() {
    const minutes = Math.floor(this.currentTime / 60);

    return minutes;
  }

  getSeconds() {
    const seconds = Math.floor(this.currentTime % 60);

    return seconds;
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
    let minutes = this.getMinutes()
    let seconds = this.getSeconds()
    let mm = this.computeTwoDigitNumber(minutes)
    let ss = this.computeTwoDigitNumber(seconds)
    let split = `${mm}:${ss}`
    return split
  }

  
}
