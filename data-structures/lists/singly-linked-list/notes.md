A singly linked list is a data structure that contains a head, tail and length properties.
It consists of nodes, and each node has a value and a  pointer to another node or null.
Think of it like a skyscraper without an elevator(array), just stairs connecting each floor to the next one.

Advantages over array: Insertion and deletion(in certain cases).
Array are good when we need random access because of the way they are indexed.

Big O
Insertion: O(1)
Deletion: O(1) if at the head, O(N) if anywhere in between or tail
Searching: O(N)
Access: O(N)