/* 
    Given a tic-tac-toe board represented by an array of arrays - output the board to the terminal.
    For example, if we have the following board:
        let board = [
            ['X', '_', '_'],
            ['_', 'X', '_'],
            ['O', 'O', 'X']
        ];
    We should output something like this (feel free to be creative):
          X  |     |     
        =================
             |  X  |     
        =================
          O  |  O  |  X  
        =================
    Test your function by calling it with an example tic-tac-toe board.
*/

export let board = [
  ["X", "_", "_"],
  ["_", "X", "_"],
  ["O", "O", "X"],
];
export function printBoard(board) {
  let newB = board.map((el) => {
    //console.log(el.join())
    let regex = /_/g;
    let line = el.join(" | ").replace(regex, " ") + "\n";
    console.log(line);
    return line;
    // return el.join(" | ");
  });
  return newB.join("========== \n").toString();
}

//console.log(printBoard(board));

/*
    Given a tic-tac-toe board (an array of arrays),
        - return true if there are no moves left to make (there are no more '_' values)
        - return false if there are still moves that can be made
*/
export function checkIfNoMovesLeft(board) {
  let arr = [];
  board.forEach((element) => {
    element.includes("_") ? arr.push(false) : arr.push(true);
  });
  //console.log(arr);
  return arr.includes(false) ? false : true;
}

//console.log(checkIfNoMovesLeft(board));
