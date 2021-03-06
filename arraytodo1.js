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

    removeFront() {
        if(this.head==null){
            return null;
        }
        this.head=this.head.next;
        return this.head;
    }

    front() {
        if(this.head==null){
            return null;
        }
        return this.head.val;
    }

    contains(value) {
        var runner=this.head;
        while(runner!=null){
            if(runner.val==value){
                return true;
            }
            runner=runner.next;
        }
        return false;
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

    max() {
        var maximum=this.head.val;
        var runner=this.head;
        while(runner!=null){
            if(runner.val>maximum){
                maximum=runner.val;
            }
            runner=runner.next;
        }
        return maximum;
    }

    min() {
        var minimum=this.head.val;
        var runner=this.head;
        while(runner!=null){
            if(minimum>runner.val){
                minimum=runner.val;
            }
            runner=runner.next;
        }
        return minimum;
    }

    average() {
        var count=0;
        var sum=0;
        var runner=this.head;
        while(runner!=null){
            count++;
            sum=sum+runner.val;
            runner=runner.next;
        }
        return sum/count;
    }

    back() {
        var runner=this.head;
        while(runner.next!=null) {
            runner=runner.next;
        }
        return runner.val;
    }

    addBack(value) {
        var newNode=new Node(value);
        var runner=this.head;
        while(runner.next!=null){
            runner=runner.next;
        }
        runner.next=newNode;
    }

    removeBack() {
        var runner=this.head;
        if(runner.next==null){
            this.head=null;
        }
        else {
        while(runner.next.next!=null){
            runner=runner.next;
        }
        runner.next=null;
    }
    }

    mintoFront() {
        var min=this.head.val;
        var runner=this.head;
        while(runner!=null){
            if(runner.val<min){
                min=runner.val;
            }
            runner=runner.next;
        }
        var newNode=new Node(min);
        runner=this.head;
        if(runner.val==min){
            return this.head;
        }
        if(runner.next.val==min){
            runner.next=runner.next.next;
            newNode.next=this.head;
            this.head=newNode;
            return this.head;
        }
        while(runner.next.next!=null){
            if(runner.next.val==min){
                runner.next=runner.next.next;
                newNode.next=this.head;
                this.head=newNode;
                return this.head;
            }
            runner=runner.next;
        }
        if(runner.next.val==min){
            runner.next=runner.next.next;
            newNode.next=this.head;
            this.head=newNode;
            return this.head;
        }
    }

    maxtoBack() {
        var max=this.head.val;
        var runner=this.head;
        var runner2=this.head;
        while(runner!=null){
            if(runner.val>max){
                max=runner.val;
            }
            runner=runner.next;
        }
        while(runner2.next!=null){
            runner2=runner2.next;
        }
        var newNode=new Node(max);
        runner=this.head;
        if(runner.val==max){
            this.head=runner.next;
            runner2.next=newNode;
            return this.head;
        }
        if(runner.next.val==max){
            runner.next=runner.next.next;
            runner2.next=newNode;
            return this.head;
        }
        while(runner.next.next!=null){
            if(runner.next.val==max){
                runner.next=runner.next.next;
                runner2.next=newNode;
                return this.head;
            }
            runner=runner.next;
        }
    }
}

linkedlist=new SLL();
console.log(linkedlist);
linkedlist.addFront(4);
linkedlist.addFront(8);
console.log(linkedlist);
console.log(linkedlist.front());
console.log(linkedlist.contains(0));
console.log(linkedlist.length());
console.log(linkedlist.display());
console.log(linkedlist.min());
console.log(linkedlist.max());
console.log(linkedlist.average());
linkedlist.addBack(2);
linkedlist.addBack(12);
linkedlist.addBack(20);
linkedlist.addBack(100);
linkedlist.addFront(0);
console.log(linkedlist.back());
console.log(linkedlist);
console.log(linkedlist.display());
linkedlist.removeBack();
console.log(linkedlist.display());
linkedlist.removeBack();
console.log(linkedlist.display());
linkedlist.removeBack();
console.log(linkedlist.display());
linkedlist.addBack(10000000);
console.log(linkedlist.back());
console.log(linkedlist.display());
linkedlist.addFront(289);
linkedlist.addFront(8899);
linkedlist.addFront(-2);
linkedlist.addFront(1);
console.log(linkedlist.display());
linkedlist.mintoFront();
console.log(linkedlist.display());
linkedlist.addBack(-100);
console.log(linkedlist.display());
linkedlist.addBack(200);
linkedlist.addBack(555);
linkedlist.addBack(332);
console.log(linkedlist.display());
linkedlist.mintoFront();
console.log(linkedlist.display());
linkedlist.maxtoBack();
console.log(linkedlist.display());
linkedlist.addFront(20000000000);
console.log(linkedlist.display());
linkedlist.addFront(10000000000);
console.log(linkedlist.display());
linkedlist.maxtoBack();
console.log(linkedlist.display());
linkedlist.addBack(2222);
linkedlist.addBack(23232);
linkedlist.addBack(300000000000000);
console.log(linkedlist.display());
linkedlist.maxtoBack();
console.log(linkedlist.display());
