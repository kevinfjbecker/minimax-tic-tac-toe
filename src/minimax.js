import { MAX_DEPTH } from "./config.js"

export const getMinimax = (children, heuristicValue, isTerminal) =>
    function minimax(node, depth, maximizingPlayer) {
        if (depth === 0 || isTerminal(node)) {
            // console.log(Array(MAX_DEPTH - depth).fill('    ').join('') + heuristicValue(node), node) // debug
            return heuristicValue(node)
        }
        if (maximizingPlayer) {
            let value = - Infinity
            for (const child of children(node)) {
                value = Math.max(value, minimax(child, depth - 1, false))
            }
            // console.log(Array(MAX_DEPTH - depth).fill('    ').join('') + value)
            return value
        }
        else { // (* minimizing player *)
            let value = Infinity
            for (const child of children(node)) {
                value = Math.min(value, minimax(child, depth - 1, true))
            }
            // console.log(Array(MAX_DEPTH - depth).fill('    ').join('') + value)
            return value
        }
    }
