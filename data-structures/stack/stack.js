// Stack implementation using Singly linked list.
// has constant time O(1) for insertion and removal.

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  //unshift
  push(val){
    let newNode = new Node(val);
    if(!this.first){
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    
    // increment and return
    return ++this.size;
  }
  //shift
  pop(){
    if(!this.first) return null;
    let temp = this.first;

    // if only one item, handle last item case
    if(this.first === this.last){
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

let stack = new Stack()
stack.push("Harry")
stack.push("Ron")
stack.push("Hermione")
console.log(stack)