Hash tables are key-value data stores. Each language has its own implementation of a hash table.
Hash table offer human readability of key while also maintaining computer readability by indexing via a number under the hood.
In javascript the closest implementation is a map.

Hash tables store data in a large array, and work by hashing the keys to numbers.

A hash function is any function that can be used to map data of arbitrary size to fixed-size values. The values returned by a hash function are called hash values, hash codes, digests, or simply hashes. The values are used to index a fixed-size table called a hash table.

Using prime numbers for the length of our array reduces change of collisions. This will also help distribute our keys uniformly.

Separate chaining and linear probing are two strategies used to deal with two keys that hash to the same index.

Big O: (average case)
Insert: O(1)
Delete: O(1)
Access: O(1)
