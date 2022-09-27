class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => this.currentTime += 1, 10);
    if (printTimeCallback) {
      this.intervalId = setInterval(() => printTimeCallback(), 10);
    }
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 6000);
  }

  getSeconds() {
    // ... your code goes here
    return Math.floor(this.currentTime / 100) % 60;
  }

  getCentiseconds() {
    // ... your code goes here
    return this.currentTime % 100;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let strValue = value.toString();
    if (strValue.length < 2) {
      strValue = "0" + strValue
      return strValue;
    } else {
      return strValue;
    }
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here

    const min = this.computeTwoDigitNumber(this.getMinutes()).toString()
    const sec = this.computeTwoDigitNumber(this.getSeconds()).toString()
    const centiSec = this.computeTwoDigitNumber(this.getCentiseconds()).toString()


    return `${min}:${sec}.${centiSec}`;
  }
}