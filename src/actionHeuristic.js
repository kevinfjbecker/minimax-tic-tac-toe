import { children, heuristicValue, isTerminal } from './tttMinimax.js'
import { getMoves, makeMove, nextToPlay } from './tictactoe.js'
import { randomEntry } from './util.js'

export const heuristicAction = (node) => {

    const mark = nextToPlay(node)
    const maximizingPlayer = mark === 'X'

    const moves = getMoves(node).map(move => ({ ...move, mark }))

    const children = moves.map(move => { return makeMove(node, move) })

    const movesValues = children.map(heuristicValue)

    const bestValue = maximizingPlayer ?
        Math.max(...movesValues) :
        Math.min(...movesValues)

    const bestMoves = moves.filter((m, i) => movesValues[i] === bestValue)

    const heuristicMove = randomEntry(bestMoves)

    return { mark, ...heuristicMove }
}