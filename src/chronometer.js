class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null

  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(()=>{
      this.currentTime += 1
    },1000)

    if (printTimeCallback) {
      this.intervalId = setInterval(() => printTimeCallback(), 1000)
    }
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime/60);
  }

  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60;
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

    return `${min}:${sec}`;
  }
}
