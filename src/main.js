import { heuristicAction } from './actionHeuristic.js'
import { minimaxAction } from './actionMinimax.js'
import { randomAction } from './actionRandom.js'
import * as ttt from './tictactoe.js'
import { heuristicValue } from './tttMinimax.js'

let board = ttt.getEmptyBoard()
// console.log(ttt.getString(board))
const turnsToPlay = 9
for (let i = 0; i < turnsToPlay && !ttt.isOver(board); i++) {
    let move
    if (i < 0) {
        move = randomAction(board)
    } else {
        move = minimaxAction(board)
    }
    board = ttt.makeMove(board, move)
    // console.log(move, heuristicValue(board))
    // console.log(ttt.getString(board))
}
console.log(ttt.getString(board))

