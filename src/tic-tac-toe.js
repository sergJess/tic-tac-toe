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
              if( this.getWinner()!== null || this.isDraw() === true ) return true;
        return false;
          }
        
          getWinner() {
           for(let i = 0 , length = this.gameField.length; i < length; i++){
               let center = 1;
if(this.gameField[i][center] === this.gameField[i][center-1] &&  this.gameField[i][center] === this.gameField[i][center+1] && this.gameField[i][center]!== null){
    return this.gameField[i][center];
}
if(this.gameField[center-1][i] === this.gameField[center][i] && this.gameField[center][i] === this.gameField[center+1][i] && this.gameField[center][i] !== null) return this.gameField[center][i];
           }

           if(this.gameField[1][1] === this.gameField[0][0] && this.gameField[1][1] === this.gameField[2][2] && this.gameField[1][1] !== null){
               return this.gameField[1][1];
           };
           if(this.gameField[1][1] === this.gameField[0][2] && this.gameField[2][0] === this.gameField[1][1] && this.gameField[1][1] !== null){
               return this.gameField[1][1];
           }
          return null;
           
          }
        
          noMoreTurns() {
            const isNoMoreTurns = [];
            this.gameField.forEach((value) => {
            isNoMoreTurns.push(...value);
            });
            return  isNoMoreTurns.filter(x => { return x === null}).length === 0 ? true : false;
              }
        
          isDraw() {
              let winner  ;
              this.getWinner() === null? winner = true : false;
        return !!(this.noMoreTurns() && winner );
          }
        
          getFieldValue(rowIndex, colIndex) {
        if(this.gameField[rowIndex][colIndex] !== undefined) return this.gameField[rowIndex][colIndex];
          }
}

module.exports = TicTacToe;
