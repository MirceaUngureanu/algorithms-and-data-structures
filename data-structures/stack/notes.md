Follows the LIFO (last in first out) principle.
Not native to Javascript but can be implemented with and array and using push and pop, or a linked list using shift and unshift to keep constant time O(1).

Uses:
- managing function invocations
- undo/redo
- routing (the history object)

Big O
Insertion: O(1)
Removal: O(1)
Searching: O(N)
Access: O(N)