// Class Cell
const Color = require("./Color.js");

module.exports = class Cell {
  constructor(value = "", color = 0) {
    if (arguments.length != 2) {
      console.log("Error");
    } else {
      this.value = value;
      this.color = color;
    }
  }
  setValue(value) {
    this.value = value;
  }
  setColor(color) {
    let new_color = Color;
    for (let key in new_color) {
      if (key === color) {
        this.color = new_color[key];
      }
    }
  }
  getValue() {
    return this.value;
  }
  getColor() {
    return this.color;
  }
  toInt() {
    if (Number(this.value)) {
      return Number.parseInt(this.value);
    } else {
      return "Not a number";
    }
  }
  toDouble() {
    if (Number(this.value)) {
      return Number(this.value) * 1.0;
    } else {
      return "Not a number";
    }
  }
  toDate(value) {
    if (Date.parse(value)) {
      return new Date(value);
    } else {
      console.log("Error: Wrong format of date");
    }
  }
  reset() {
    this.value = "";
    this.color = 0;
  }
};
/*let color = Color;
let cell = new Cell("125", color.Red);
let cell1 = new Cell("888", color.Wite)
*/