We use dynamic programming if we have the following two features to consider:

Overlapping subproblems - it can be broken down into subproblems which are reused several times e.g. solving a fibonachi sequence using recursion(data has repetition when broken down)

Optimal substructure - an optimal solution can be constructed from optimal solutions of its subproblems. If the solutions of our subproblems don't compound we don't have an optimal substructure e.g. finding a shortest path in a graph is an optimal substructure while the longest simple(not repeating a node) path in a graph is not.
