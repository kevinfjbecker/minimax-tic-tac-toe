import * as ttt from './tictactoe.js'

///////////////////////////////////////////////////////////////////////////////

export const children = (board) => {
    const mark = ttt.nextToPlay(board)
    const moves = ttt.getMoves(board)
    return moves
    .map(move => ({ mark, ...move }))
    .map(move => ttt.makeMove(board, move))
}

///////////////////////////////////////////////////////////////////////////////

/**
 * X is positive (maximizing)
 * Y is negative (minimizing)
*/
export const heuristicValue = (board) => {
    
    let value = 0
    
    /**
     * rows and columns
    */
   for (let i = 0; i < 3; i++) {

       let col_x_count = 0
       let col_o_count = 0
       let row_x_count = 0
       let row_o_count = 0
       
       for (let j = 0; j < 3; j++) {
           
           const col_mark = board[j][i]
           const row_mark = board[i][j]
           
           if (col_mark === 'X') {
               col_x_count++
            }
            if (col_mark === 'O') {
                col_o_count++
            }
            if (row_mark === 'X') {
                row_x_count++
            }
            if (row_mark === 'O') {
                row_o_count++
            }
        }
        
        /**
         * immediate win
        */
        if (col_x_count === 3) {
            value += 1000
        }
        if (col_o_count === 3) {
            value -= 1000
        }
        if (row_x_count === 3) {
            value += 1000
        }
        if (row_o_count === 3) {
            value -= 1000
        }
        
        /**
         * potential win
        */
       if (col_x_count === 2 && col_o_count === 0) {
            value += 100
        }
        if (col_o_count === 2 && col_x_count === 0) {
            value -= 100
        }
        if (row_x_count === 2 && row_o_count === 0) {
            value += 100
        }
        if (row_o_count === 2 && row_x_count === 0) {
            value -= 100
        }
        
        /**
         * early potential
        */
       if (col_x_count === 1 && col_o_count === 0) {
            value += 10
        }
        if (col_o_count === 1 && col_x_count === 0) {
            value -= 10
        }
        if (row_x_count === 1 && row_o_count === 0) {
            value += 10
        }
        if (row_o_count === 1 && row_x_count === 0) {
            value -= 10
        }
    }
    
    /**
     * diagonals
    */
   let nw_se_x_count = 0
   let nw_se_o_count = 0
   let ne_sw_x_count = 0
   let ne_sw_o_count = 0
   for (let i = 0, j = 2; i < 3; i++, j--) {
       
        const nw_se_mark = board[i][i]
        const ne_sw_mark = board[i][j]
        
        if (nw_se_mark === 'X') {
            nw_se_x_count++
        }
        if (nw_se_mark === 'O') {
            nw_se_o_count++
        }
        if (ne_sw_mark === 'X') {
            ne_sw_x_count++
        }
        if (ne_sw_mark === 'O') {
            ne_sw_o_count++
        }
    }

    /**
     * immediate win
    */
   if (nw_se_x_count === 3) {
        value += 1000
    }
    if (nw_se_o_count === 3) {
        value -= 1000
    }
    if (ne_sw_x_count === 3) {
        value += 1000
    }
    if (ne_sw_o_count === 3) {
        value -= 1000
    }
    
    /**
     * potential win
    */
    if (nw_se_x_count === 2 && nw_se_o_count === 0) {
        value += 100
    }
    if (nw_se_o_count === 2 && nw_se_x_count === 0) {
        value -= 100
    }
    if (ne_sw_x_count === 2 && ne_sw_o_count === 0) {
        value += 100
    }
    if (ne_sw_o_count === 2 && ne_sw_x_count === 0) {
        value -= 100
    }
    
    /**
     * early potential
    */
   if (nw_se_x_count === 1 && nw_se_o_count === 0) {
        value += 10
    }
    if (nw_se_o_count === 1 && nw_se_x_count === 0) {
        value -= 10
    }
    if (ne_sw_x_count === 1 && ne_sw_o_count === 0) {
        value += 10
    }
    if (ne_sw_o_count === 1 && ne_sw_x_count === 0) {
        value -= 10
    }
    
    return value
}

///////////////////////////////////////////////////////////////////////////////

export const isTerminal = (board) => ttt.isOver(board)
