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
    clear(){
        this._size = 0;
        this.head = null;
        this.tail = null;
    }
    removeFirst(){
        this.head = this.head.next;
        this._size -= 1;
    }
    removeLast(){
        if(this.head == null){
            return;
        }
        let prev = this.head;
        let curr = prev;
        while(curr.next != null){
            prev = curr;
            curr = curr.next;
        }
        if(curr == this.head){
            this.tail = this.head = null;
        }
        else{
            this.tail = prev;
            prev.next = null;
        }
        this._size -= 1;
    }
    insertLast(data){
        if(this.head == null){
            this.tail = new Node(data);
            this.head = this.tail;
        }
        else{
            this.tail.next = new Node(data);
            this.tail = this.tail.next;
        }
        this._size += 1;
    }
    getAt(i){
        if(this._size < i)
            return null;
        let node = this.head;
        let count = 0;
        while(count < i ){
            node = node.next;
            count++;
        }
        return node;
    }
}

module.exports = { Node, LinkedList };
