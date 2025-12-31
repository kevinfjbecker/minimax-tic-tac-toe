export const getEmptyBoard = () => Array(3).fill(0).map(() => Array(3).fill(' '))

export const getMoves = (board) => {

    if (isOver(board)) { return [] }

    return board.flat()
        .map((s, i) => ({ s, i }))
        .filter(o => o.s === ' ')
        .map(o => ({ x: o.i % 3, y: Math.floor(o.i / 3) }))
}
export const getString = (board) =>
    board.map(row => row.join(' | ')).join('\n---------\n')

export const getWinner = (board) => {

    // diagonal
    if (board[0][0] !== ' ' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) return board[2][2]
    if (board[0][2] !== ' ' && board[0][2] === board[1][1] && board[1][1] === board[2][0]) return board[2][0]

    // column
    if (board[0][0] !== ' ' && board[0][0] === board[1][0] && board[1][0] === board[2][0]) return board[2][0]
    if (board[0][1] !== ' ' && board[0][1] === board[1][1] && board[1][1] === board[2][1]) return board[2][1]
    if (board[0][2] !== ' ' && board[0][2] === board[1][2] && board[1][2] === board[2][2]) return board[2][2]

    // row
    if (board[0][0] !== ' ' && board[0][0] === board[0][1] && board[0][1] === board[0][2]) return board[0][2]
    if (board[1][0] !== ' ' && board[1][0] === board[1][1] && board[1][1] === board[1][2]) return board[1][2]
    if (board[2][0] !== ' ' && board[2][0] === board[2][1] && board[2][1] === board[2][2]) return board[2][2]

}

export const isOver = (board) => {

    // full
    if (!board.flat().some(s => s === ' ')) return true

    // diagonal
    if (board[0][0] !== ' ' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) return true
    if (board[0][2] !== ' ' && board[0][2] === board[1][1] && board[1][1] === board[2][0]) return true

    // column
    if (board[0][0] !== ' ' && board[0][0] === board[1][0] && board[1][0] === board[2][0]) return true
    if (board[0][1] !== ' ' && board[0][1] === board[1][1] && board[1][1] === board[2][1]) return true
    if (board[0][2] !== ' ' && board[0][2] === board[1][2] && board[1][2] === board[2][2]) return true

    // row
    if (board[0][0] !== ' ' && board[0][0] === board[0][1] && board[0][1] === board[0][2]) return true
    if (board[1][0] !== ' ' && board[1][0] === board[1][1] && board[1][1] === board[1][2]) return true
    if (board[2][0] !== ' ' && board[2][0] === board[2][1] && board[2][1] === board[2][2]) return true

    return false

}

export const makeMove = (board, action) => {

    const { mark, x, y } = action

    const nextBoard = structuredClone(board)

    nextBoard[y][x] = mark

    return nextBoard

}

export const nextToPlay = (board) => {
    const marksList = board.flat()
    const countOs = marksList.filter(m => m === 'O').length
    const countXs = marksList.filter(m => m === 'X').length

    if (countXs > countOs) { return 'O' }

    return 'X'
}