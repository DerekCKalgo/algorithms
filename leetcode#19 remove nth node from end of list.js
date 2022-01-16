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
    Removennode(value) {
        var count=0;
        var runner=this.head;
        while(runner!=null){
            count++;
            runner=runner.next;
        }
        var which=count-value;
        var runner=this.head;
        if(which==0){
            this.head=runner.next;
            return this.head;
        }
        var prevrunner;
        var counter=0;
        while(counter!=which){
            counter++;
            prevrunner=runner;
            runner=runner.next;
        }
        prevrunner.next=runner.next;
        return this.head;
    }
}

linkedlist=new SLL();
console.log(linkedlist);
linkedlist.addFront(4);
linkedlist.addFront(8);
linkedlist.addFront(8);
linkedlist.addFront(13);
linkedlist.addFront(4);
linkedlist.addFront(6);
console.log(linkedlist);
console.log(linkedlist.length());
console.log(linkedlist.display());
linkedlist.Removennode(6);
console.log(linkedlist.length());
console.log(linkedlist.display());


