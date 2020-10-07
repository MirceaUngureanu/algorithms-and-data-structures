class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val){
    let newNode = new Node(val);
    if(!this.first){
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    // increment and return
    return ++this.size;
  }

  dequeue(){
    if(!this.first) return null;

    let temp = this.first;
    // if only one item, handle last item case
    if(this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

let queue = new Stack()
queue.push("Harry")
queue.push("Ron")
queue.push("Hermione")
console.log(queue)