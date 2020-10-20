class PriorityQueue {
  constructor(){
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({val, priority});
    this.sort();
  };
  dequeue() {
    return this.values.shift();
  };
  // O(N*log(N))
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  };
}

const q = new PriorityQueue()
q.enqueue("A", 3)
q.enqueue("B", 33)
q.enqueue("C", 1.5)
q.enqueue("D", 11)

console.log(q)
console.log(q.dequeue())