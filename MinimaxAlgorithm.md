# Minimax Algorithm

## Pseudo code

``` Pseudocode
function minimax(node, depth, maximizingPlayer) is
    if depth = 0 or node is a terminal node then
        return the heuristic value of node
    if maximizingPlayer then
        value := - Infinity
        for each child of node do
            value := max(value, minimax(child, depth - 1, FALSE))
        return value
    else (* minimizing player *)
        value := + Infinity
        for each child of node do
            value := min(value, minimax(child, depth - 1, TRUE))
        return value
```

## JavaScript

### Need to implement

* isTerminal
* heuristicValue
* children

``` Javascript
function minimax(node, depth, maximizingPlayer) {
    if (depth === 0 || isTerminal(node)) {
        return heuristicValue(node)
    }
    if (maximizingPlayer) {
        let value = - Infinity
        for(child of children(node)) {
            value = Math.max(value, minimax(child, depth - 1, false))
        }
        return value
    }
    else { // (* minimizing player *)
        let value = Infinity
        for(child of children(node)){
            value = Math.min(value, minimax(child, depth - 1, true))
        }
        return value
    }
}
```
