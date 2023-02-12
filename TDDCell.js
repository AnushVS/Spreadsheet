// Test for class Cell

const Cells = require("./Cells.js");
const Color = require("./Color.js");

let cell = new Cells();

class testCells {
  static testSetValue() {
    cell.setValue("125");
    if (cell.value === "125") {
      console.log("Test passed");
    } else {
      console.log("Test failed");
    }
  }
  static testSetColor(color) {
    cell.setColor("Red");

    if (cell.color === 4) {
      console.log("Test passed");
    } else {
      console.log("Test failed");
    }
  }
  static testGetValue() {
    if (cell.value === cell.getValue()) {
      console.log("Test passed");
    } else {
      console.log("Test failed");
    }
  }
  static testGetColor() {
    if (cell.color === cell.getColor()) {
      console.log("Test passed");
    } else {
      console.log("Test failed");
    }
  }
  static testToInt() {
    cell.setValue("128");
    if (Number.isInteger(cell.toInt())) {
      console.log("Test passed");
    } else {
      console.log("Test failed");
    }
  }
  static testToDouble() {
    cell.setValue("128");

    if (Number(cell.value) && cell.toDouble()) {
      console.log("Test passed");
    } else {
      console.log("Test failed");
    }
  }
  static testToDate() {
    if (cell.toDate("12") || cell.toDate("asfdhj") === NaN) {
      console.log("Test passed");
    } else {
      console.log("Test failed");
    }
  }
  static testReset() {
    cell.setValue("125");
    cell.setColor("Red");
    cell.reset();
    if (cell.value === "" && cell.color === 0) {
      console.log("Test passed");
    } else {
      onsole.log("Test failed");
    }
  }
}
testCells.testSetValue();
testCells.testSetColor();
testCells.testGetValue();
testCells.testGetColor();
testCells.testToInt();
testCells.testToDouble();
testCells.testToDate();
testCells.testReset();
