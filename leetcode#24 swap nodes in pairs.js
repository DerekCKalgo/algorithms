class Node {
    constructor(value) {
        this.val=value;
        this.next=null;
    } 
}

class SLL {
    constructor() {
        this.head=null;
    }
    addFront(value) {
        var newNode=new Node(value);
        newNode.next=this.head;
        this.head=newNode;
        return this.head;
    }
    length() {
        var count=0;
        var runner=this.head;
        while(runner!=null){
            count++;
            runner=runner.next;
        }
        return count;
    }
    display() {
        var str="";
        var runner=this.head;
        while(runner!=null){
            str=str+runner.val+" ";
            runner=runner.next;
        }
        return str;
    }
    swapnodes(){
        var runner=this.head;
        var prev=this.head;
        var nxtPair;
        var second;
        nxtPair=runner.next.next;
            second=runner.next;
            second.next=runner;
            runner.next=nxtPair;
            this.head=second;
            prev=runner;
            runner=nxtPair;
        while(runner!=null&&runner.next!=null){
            nxtPair=runner.next.next;
            second=runner.next;
            second.next=runner;
            runner.next=nxtPair;
            prev.next=second;
            prev=runner;
            runner=nxtPair;
        }
        return this.head;
    }
}

linkedlist=new SLL();
console.log(linkedlist);
linkedlist.addFront(4);
linkedlist.addFront(8);
linkedlist.addFront(10);
linkedlist.addFront(13);
linkedlist.addFront(4);
linkedlist.addFront(99);
linkedlist.addFront(100);
console.log(linkedlist);
console.log(linkedlist.length());
console.log(linkedlist.display());
linkedlist.swapnodes();
console.log(linkedlist);
console.log(linkedlist.length());
console.log(linkedlist.display());


