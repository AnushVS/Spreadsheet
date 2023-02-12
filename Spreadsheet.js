// class Spreadsheet

const Color = require("./Color.js")
const Cells = require('./Cells.js')

module.exports = class Spreadsheet{
    constructor(rows, columns){
        this.row = rows;
        this.col = columns;
        this.cells = new Array(this.row);
        for(let i = 0; i < this.row; ++i){
            this.cells[i] =  new Array(this.col);
            for(let j = 0; j < this.col; ++j)
            {
                this.cells[i][j] = 0;
            }
        }
    }


 setCellAt(row, col, cell){
    
    this.cells[row][col] = cell;
 }
 getCellAt(row, col){

    return  this.cells[row][col];
 }
 addRow(ind){
    
    this.cells.splice(ind, 0, (new Array(this.col)).fill(0));
    //this.row += 1; 
}


 removeRow(ind){
    return this.cells.splice(ind, 1);
    //this.row -= 1;
 }
 addColumn(ind) {
    for(let i = 0; i < this.row; ++i){
    this.cells[i].splice(ind, 0, 0);
    }
    //this.col += 1;
 }

removeColumn(ind){
    for(let i = 0; i < this.row; ++i){
        this.cells[i].splice(ind, 1);    

    }
    //this.col -= 1;
}
 swapRows(ind1, ind2){
        
        let tmp = this.cells[ind1];
        this.cells[ind1] = this.cells[ind2];
        this.cells[ind2] = tmp;
    
}
 swapColumns(ind1, ind2){
    let tmp;
    for(let i = 0; i < this.row; ++i){
        tmp = this.cells[i][ind1];
        this.cells[i][ind1] = this.cells[i][ind2];
        this.cells[i][ind2] = tmp;
    }
 }

}
