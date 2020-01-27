class Counter {
  constructor() {
    this.currentValue = 0;
  }

  add(amount) {
    this.currentValue += amount;
  }

  reset() {
    this.currentValue = 0;
  }

  get() {
    return this.currentValue;
  }
}

module.exports = Counter;
