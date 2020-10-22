Dynamic programming - a method for solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once, and storing their solutions.

We use dynamic programming if we have the following two features to consider:

Overlapping subproblems - it can be broken down into subproblems which are reused several times e.g. solving a fibonachi sequence using recursion(data has repetition when broken down)

Optimal substructure - an optimal solution can be constructed from optimal solutions of its subproblems. If the solutions of our subproblems don't compound we don't have an optimal substructure e.g. finding a shortest path in a graph is an optimal substructure while the longest simple(not repeating a node) path in a graph is not.

Memoizations - storing the results of expensive function calls and returning the cached result when the same inputs occur again.

Tabulation - storing the results of a previous result in a "table" (usually an array).
Usually done using iteration(loop)
Batter space complexity can be achieved using tabulation. 
Does not suffer from stack overflow issues like recursive solutions.