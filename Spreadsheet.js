// class Spreadsheet

const Color = require("./Color.js");
const Cells = require("./Cells.js");

module.exports = class Spreadsheet {
  constructor(rows, columns) {
    this.row = rows;
    this.col = columns;
    this.cells = new Array(this.row);
    for (let i = 0; i < this.row; ++i) {
      this.cells[i] = new Array(this.col);
      for (let j = 0; j < this.col; ++j) {
        this.cells[i][j] = 0;
      }
    }
  }

  setCellAt(row, col, cell) {
    if (
      !Number(arguments[0]) ||
      !Number(arguments[1]) ||
      typeof arguments[2] != "object" ||
      arguments.length != 3
    ) {
      console.log("Error:Please enter arguments in right format");
    }

    if (Number(arguments[0]) < 0) {
      row = arguments.length + Number(arguments[0]);
    }
    if (Number(arguments[1]) < 0) {
      col = arguments.length + Number(col);
    }
    if (
      Number.isInteger(Number(arguments[0])) &&
      Number.isInteger(Number(arguments[1]))
    ) {
      this.cells[row][col] = cell;
    } else {
      console.log("Error: Please enter numbers in right format");
    }
  }

  getCellAt(row, col) {
    if (arguments.length != 2) {
      console.log("Error: Please enter 2 numbers");
    }
    if (Number(arguments[0]) < 0) {
      row = arguments.length + Number(arguments[0]);
    }
    if (Number(arguments[1]) < 0) {
      col = arguments.length + Number(arguments[1]);
    }
    if (
      Number.isInteger(Number(arguments[0])) &&
      Number.isInteger(Number(arguments[1]))
    ) {
      return this.cells[row][col];
    } else {
      console.log("Error: Please enter numbers in correct format");
    }
  }
  addRow(ind) {
    if (arguments.length != 1) {
      console.log("Error: Please enter 1 number");
    }
    if (Number(arguments[0]) < 0) {
      ind = arguments.length + Number(arguments[0]);
    }
    if (Number.isInteger(Number(arguments[0]))) {
      this.cells.splice(ind, 0, new Array(this.col).fill(0));
    } else {
      console.log("Error: Please enter number in correct format");
    }
  }

  removeRow(ind) {
    if (arguments.length != 1) {
      console.log("Error: Please enter 1 number");
    }
    if (Number(arguments[0]) < 0) {
      ind = arguments.length + Number(arguments[0]);
    }
    if (Number.isInteger(Number(arguments[0]))) {
      return this.cells.splice(ind, 1);
    } else {
      console.log("Error: Please enter number in right format");
    }
  }
  addColumn(ind) {
    if (arguments.length != 1) {
      console.log("Error: Please enter 1 number");
    }
    if (Number(arguments[0]) < 0) {
      ind = arguments.length + Number(arguments[0]);
    }
    if (Number.isInteger(Number(arguments[0]))) {
      for (let i = 0; i < this.row; ++i) {
        this.cells[i].splice(ind, 0, 0);
      }
    } else {
      console.log("Error: Please enter number in right format");
    }
  }

  removeColumn(ind) {
    if (arguments.length != 1) {
      console.log("Error: Please enter 1 number");
    }
    if (Number(arguments[0]) < 0) {
      ind = arguments.length + Number(arguments[0]);
    }
    if (Number.isInteger(Number(arguments[0]))) {
      for (let i = 0; i < this.row; ++i) {
        this.cells[i].splice(ind, 1);
      }
    } else {
      console.log("Error: Please enter number in right format");
    }
  }
  swapRows(ind1, ind2) {
    if (arguments.length != 2) {
      console.log("Error: Please enter 2 numbers");
    }
    if (Number(arguments[0]) < 0) {
      row = arguments.length + Number(arguments[0]);
    }
    if (Number(arguments[1]) < 0) {
      col = arguments.length + Number(arguments[1]);
    }
    if (
      Number.isInteger(Number(arguments[0])) &&
      Number.isInteger(Number(arguments[1]))
    ) {
      let tmp = this.cells[ind1];
      this.cells[ind1] = this.cells[ind2];
      this.cells[ind2] = tmp;
    } else {
      console.log("Error: Please enter numbers in right format");
    }
  }

  swapColumns(ind1, ind2) {
    if (arguments.length != 2) {
      console.log("Error: Please enter 2 numbers");
    }
    if (Number(arguments[0]) < 0) {
      row = arguments.length + Number(arguments[0]);
    }
    if (Number(arguments[1]) < 0) {
      col = arguments.length + Number(arguments[1]);
    }
    if (
      Number.isInteger(Number(arguments[0])) &&
      Number.isInteger(Number(arguments[1]))
    ) {
      let tmp;
      for (let i = 0; i < this.row; ++i) {
        tmp = this.cells[i][ind1];
        this.cells[i][ind1] = this.cells[i][ind2];
        this.cells[i][ind2] = tmp;
      }
    } else {
      console.log("Error: Please enter numbers in right format");
    }
  }
};
