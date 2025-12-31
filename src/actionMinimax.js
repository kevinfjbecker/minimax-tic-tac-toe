import { nextToPlay, getMoves, makeMove } from "./tictactoe.js"
import { children, heuristicValue, isTerminal } from './tttMinimax.js'
import { getMinimax } from './minimax.js'
import { randomEntry } from './util.js'
import { MAX_DEPTH } from "./config.js"

export const minimaxAction = (node) => {

    const minimax = getMinimax(children, heuristicValue, isTerminal)
    const depth = MAX_DEPTH

    const mark = nextToPlay(node)
    const maximizingPlayer = mark === 'X'

    const moves = getMoves(node).map(move => ({ ...move, mark }))

    const nextStates = moves.map(move => { return makeMove(node, move) })

    const movesValues = nextStates.map(nextState => {
        return minimax(nextState, depth, maximizingPlayer)
    })

    const bestValue = maximizingPlayer ?
        Math.max(...movesValues) :
        Math.min(...movesValues)

    const bestMoves = moves.filter((m, i) => movesValues[i] === bestValue)

    const minimaxMove = randomEntry(bestMoves)

    return { mark, ...minimaxMove }
}