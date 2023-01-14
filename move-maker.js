import { checkIfNoMovesLeft } from "./board-printer.js";
//import { printBoard } from "./board-printer.js";
import { board } from "./board-printer.js";

/*
    Given a move and a board (an array of arrays), return true if the move is valid.
        A move is represented by 2 numbers separated by a comma.
        The first number is the row (1, 2 or 3) and the second number is the column (1, 2 or 3).
            Some valid example moves are 1,3 and 2,2.
            Some invalid examples are 0,1 and 2-1.
    Also, a move can only be made in a free space ('_') on the board.
    If the move is not valid:
        - you can output 'Try again...'
        - and then return false
    Testing your function by calling it with some values. An example board is:
        let board = [
            ['X', '_', '_'],
            ['_', 'X', '_'],
            ['O', 'O', 'X']
        ];
        */
// let convertMoveToArr = {

// }

let c2 = (move) => {
  let moveToArr = move.split(",");
  return {
    //moveToArr: move.split(","),
    //moveToArr(move){return move.split(",")},
    moveIndex1: parseInt(moveToArr[0]),
    moveIndex2: parseInt(moveToArr[1]),
    moveR() {
      return this.moveIndex1 - 1;
    },
    moveC() {
      return this.moveIndex2 - 1;
    },
  };
};

function validateMove(move, board) {
  //let movArr = move.split(",");
  let numObj = c2(move);
  //   let moveIndex1 = parseInt(movArr[0]);
  //   let moveIndex2 = parseInt(movArr[1]);
  //   let moveInOnBoardR = moveIndex1 - 1;
  //   let moveIndx2OnBoardC = moveIndex1 - 1;

  //console.log(numObj, 1);
  //console.log([1, 2, 3].includes(numObj.moveIndex1), 2.5);
  //   if ((numObj.moveIndex1 || numObj.moveIndex2) !== 1 || 2 || 3)
  if (![1, 2, 3].includes(numObj.moveIndex1) || ![1, 2, 3].includes(numObj.moveIndex2)) {
    console.log("Try again...");
    return false;
  }
  // have to expand on condition isid if statmenet , eg. if moveIndex1 > 0 && moveIndex1 < 4, do the same for moveIndex2

  if (checkIfNoMovesLeft(board) === false) {
    // console.log("Try again...");
    // return false;
    let canMove = board[numObj.moveR()][numObj.moveC()] === "_" ? true : false;
    if (canMove) return true;
    console.log("Try again..");
    return false;
  }

  // could just check if the numbers are not equal to 1 2 or 3
  // this would be silmpler, - try and use the simples conde when possible

  //condition 1
  //condition 2 = move.map( if numb < 1)return invalin //
  //condition 2b = || if numb > 3 )  return invalind
  // if move is invalid return statment = "try agian"
  // second statment is false , can use console.log twice
  //condition 3 = free space // if(board[location] === " _"), may need map

  // Implement this at the end if you have time, otherwise you can help your teammates!
}

//console.log(validateMove("1,2", board), 2);
/*
    Given 3 parameters:
        - a board (an array of arrays)
        - a move (2 numbers separated by a comma)
        - a player ('X' or 'O'):
    Check that the move is valid using the validateMove function.
        If the move is not valid, the function should just return false.
        If the move is valid, the function should:
            - Update the board with the player's value ('X' or 'O') in the correct position
            - Return true
*/
export function makeMove(board, move, player) {
  let numObj = c2(move);
  //console.log({ board });
  if (validateMove(move, board)) {
    board[numObj.moveR()][numObj.moveC()] = player;
    //console.log({ board });
    return true;
  }

  return false;
}

//console.log(makeMove(board, "2,3", "X"));
//console.log(makeMove(board, "2,1", "X"));
