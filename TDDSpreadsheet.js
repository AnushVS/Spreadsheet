// Test for class Spreadsheet

const Color = require("./Color.js");
const Cells = require("./Cells.js");
const SpreadSheet = require("./Spreadsheet.js");
                
        let color = Color;
        let cell = new Cells("125", color.Red);
        let spreadsheet = new SpreadSheet(5,6);

class testSpreadsheet{

    static testSetCellAt(){
      
        spreadsheet.setCellAt(1,2, cell);
        if(spreadsheet.cells[1][2] ===  cell){
            
            console.log("Test passed");
    }
    else{
        console.log("Test failed");
    }
}
    static testGetCellAt(){
       
        spreadsheet.setCellAt(1,2, cell);
        
        if(spreadsheet.getCellAt(1,2) === cell){
            console.log("Test passed");
        }
        else{
            console.log("Test failed");
        }
    }
        
    static testAddRow(){
             
        spreadsheet.setCellAt(1,2, cell);
        spreadsheet.addRow(3);
            
        if(spreadsheet.cells[1][2] === cell){
                
           console.log("Test passed");
        }
            else{
                console.log("Test failed")
        }

        spreadsheet.addRow(0);
            
            if(spreadsheet.cells[2][2] === cell){
                
                console.log("Test passed");
        }
            else{
                console.log("Test failed")
        }
    
    }

    static testRemoveRow(){
              
        spreadsheet.setCellAt(1,2, cell);
        spreadsheet.removeRow(2);
        
        if(spreadsheet.cells[1][2] === cell){
                
            console.log("Test passed");
         }
             else{
                 console.log("Test failed")
         }
 
         spreadsheet.removeRow(0);
             
         if(spreadsheet.cells[0][2] === cell){
                 
                 console.log("Test passed");
    }
            else{
                console.log("Test failed")
    }
}
   static testAddColumn(){
      
        spreadsheet.setCellAt(1,2, cell);
        spreadsheet.addColumn(3);
        
        if(spreadsheet.cells[1][2] === cell){
                
            console.log("Test passed");
         }
             else{
                 console.log("Test failed");
         }
 
         spreadsheet.addColumn(0);
             
        if(spreadsheet.cells[1][3] === cell){
                 
                 console.log("Test passed");
    }
        else{
                console.log("Test failed");
    }
        
    }
    static testRemoveColumn(){
            
        spreadsheet.setCellAt(2,1, cell);
        spreadsheet.removeColumn(2);
        
        if(spreadsheet.cells[2][1] === cell){
                
            console.log("Test passed");
         }
             else{
                 console.log("Test failed");
         }
         spreadsheet.removeColumn(0);
        
         if(spreadsheet.cells[2][0] === cell){
                 
             console.log("Test passed");
          }
              else{
                  console.log("Test failed");
          }
        
    }
    static testSwapRows(){
        
        let rcell = new Cells("125", color.Red);
        let wcell = new Cells("521", color.White);

        spreadsheet.setCellAt(2,1, rcell);
        spreadsheet.setCellAt(4,2, wcell)
        spreadsheet.swapRows(2, 4);
        if(spreadsheet.cells[2][1] === wcell && spreadsheet.cells[4][2] === rcell){
           
            console.log("Test passed");
          }
          else{
            console.log("Test passed");
          }
        }
        
    static testSwapColumns(){
        let rcell = new Cells("125", color.Red);
        let wcell = new Cells("521", color.White);
       
        spreadsheet.setCellAt(2,1, rcell);
        spreadsheet.setCellAt(4,3, wcell);
        spreadsheet.swapColumns(1,3);
        if(spreadsheet.cells[2][1] === wcell && spreadsheet.cells[4][3] === rcell){
           
            console.log("Test passed");
          }
          else{
            console.log("Test passed");
          }
    

    }
}

testSpreadsheet.testSetCellAt();
testSpreadsheet.testGetCellAt();
testSpreadsheet.testAddRow();
testSpreadsheet.testRemoveRow();
testSpreadsheet.testAddColumn();
testSpreadsheet.testRemoveColumn();
testSpreadsheet.testSwapRows();
testSpreadsheet.testSwapColumns();