# Tic-tac-toe Heuristic

* +1000 for each 3-in-a-line (immediate win).
* +100 for each two-in-a-line with an empty cell (potential win on the next move).
* +10 for each one-in-a-line with two empty cells (early potential).
* 0 otherwise (empty lines or lines with both players' marks).

Negative scores for the opponent's pieces with the same weights (e.g., -1000 for an opponent's win, -100 for an opponent's two-in-a-line, etc.).
