import { nextToPlay, getMoves } from "./tictactoe.js"

export const randomAction = (node) => {
    const mark = nextToPlay(node)
    const moves = getMoves(node)

    const randomMove = moves[Math.floor(Math.random() * moves.length)]

    return { mark, ...randomMove }
}