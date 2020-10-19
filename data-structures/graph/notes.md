A graph is a collection of nodes and connections between them.

Uses:
- social networks
- location / mapping
- routing algorithms
- visual hierarchy
- file system optimisation
- recommendations engines

Terms:
- vertex = a node
- edge = connection between nodes
- directed/undirected = directions assigned to distances between vertices
- weighted/unweighted = values assigned to distances between vertices

The two most common way to store graphs are adjacency list and adjacency matrix.

Graph traversal uses:
- peer to peer networking
- web crawlers
- finding "closest" matches/recommendations
- shortest path problems: GPS navigation, solving mazes, AI(shortest path to win the game)

Depth first recursive pseudocode:
```
const results = []
const visited = {}

DFSRecursive(vertex):
    if verted is empty 
        return (this is base case)
    add vertex to results list
    mark vertex as visited
    for each neighbor in vertex's neighbors:
        if neighbor is not visited:
            recursively call DFSRecursive on neighbor
```