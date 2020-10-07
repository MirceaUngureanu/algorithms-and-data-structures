Queues are FIFO(first in first out) data structures.

Enqueue and dequeue correspond to adding and taking off the queue.

We can build queues in JS using and array however they are inefficient due to the array having to reindex all items after insertion or removal. Use a custom implementation using a single linked list instead.

Uses:
- background tasks
- uploading resources
- printing/task processing

Big O
Insertion: O(1)
Removal: O(1)
Searching: O(N)
Access: O(N)