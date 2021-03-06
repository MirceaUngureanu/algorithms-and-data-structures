Binary heaps are a type of heap which in turn is a type of tree. They are as compact as possible. We fill the children out first before moving down and left side children take priority.

MaxBinaryHeap - parent nodes are always larger than children noted
MinBinaryHeap - parent nodes are always smaller than children noted

Uses:
- priority queues
Priority queue
Is an abstract concept that can be implemented using a heap.

We can store a heap using a list or array data structure. 
The formula for finding a child node in the list is:
- for every index of and array n
- the left child is stored at 2n + 1
- the right child is stored at 2n + 2
If we know the child and want to find the parent:
- for every child node at index n
- its parent index follows the formula Math.floor((n-1)/2)

Big O:
Insertion: O(log N)
Removal: O(log N)
Search: O(N)

