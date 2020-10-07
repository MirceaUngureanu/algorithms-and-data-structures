Binary search trees work very well for sortable data.

Rules of BST:
- each node can only have a maximum of two children
- every node to the left of the parent node is less than the parent
- every node to the right is always greater than the parent node

Big O:
Not guaranteed, so for average and best case we get:
Insertion: O(log N)
Searching: O(log N)
The worst case and when we should refactor we get:
Insertion: O(N)
Searching: O(N)