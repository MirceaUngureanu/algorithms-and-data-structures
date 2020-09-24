Split in half -> Sort -> Merge
O(N log N) explanation
O(log N) for decomposition
Because while the items in the array increases, the amount of times we half the array(base 2) just increases by a small amount
e.g. array of 8 = 3 splits
16 = 4 splits
32 = 5 splits
O(N) for comparisons per decomposition

