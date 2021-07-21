class TicTacToe {
    constructor() {
        this.firstPlayer = 'x';
        this.secondPlayer = 'o';
        this.whatIsCurrentPlayer = 0;
        this.gameField = [[null,null,null],[null,null,null], [null,null,null]];
          }
        
          getCurrentPlayerSymbol() {
            return (this.whatIsCurrentPlayer % 2 === 0) ?  this.firstPlayer : this.secondPlayer;
          }
        
          nextTurn(rowIndex, columnIndex) {
            if((rowIndex >= 0 && rowIndex < 3) && (columnIndex >= 0 && columnIndex < 3) && this.gameField[rowIndex][columnIndex] === null ){
              this.gameField[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
              this.whatIsCurrentPlayer++;
            }
          }
        
          isFinished() {
        
          }
        
          getWinner() {
        
          }
        
          noMoreTurns() {
            const isNoMoreTurns = [];
            this.gameField.forEach((value) => {
            isNoMoreTurns.push(...value);
            });
            return  isNoMoreTurns.filter(x => { return x === null}).length === 0 ? true : false;
              }
        
          isDraw() {
        
          }
        
          getFieldValue(rowIndex, colIndex) {
        if(this.gameField[rowIndex][colIndex] !== undefined) return this.gameField[rowIndex][colIndex];
          }
}

module.exports = TicTacToe;
