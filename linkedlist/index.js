// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data,next=null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this._size = 0;
    }
    insertFirst(data){
        this.head = new Node(data,this.head);
        if(this.head.next == null)
            this.tail = this.head;
        this._size += 1;
    }
    size(){
        return this._size;
    }
    getFirst(){
        return this.head;
    }
    getLast(){
        return this.tail;
    }
}

module.exports = { Node, LinkedList };
