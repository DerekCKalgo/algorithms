class BTNode {
    constructor(value) {
        this.val=value;
        this.left=null;
        this.right=null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    add(value){
        if (this.root==null){
            this.root=new BTNode(value);
            return this;
        }
        else {
            var runner=this.root;
            while(runner!=null){
                if(value<runner.val){
                    if(runner.left!=null){
                        runner=runner.left;
                    }
                    else{
                        runner.left=new BTNode(value);
                        return this;
                    }
                }
                else{
                    if(runner.right!=null){
                        runner=runner.right;
                    }
                    else{
                        runner.right=new BTNode(value);
                        return this;
                    }
                }
            }
        }
    }

    contains(value){
        if(this.root==null){
            return false;
        }
        var runner=this.root;
        while(runner!=null){
            if(value==runner.val){
                return true;
            }
            else if(value<runner.val){
                runner=runner.left;
            }
            else if(value>runner.val){
                runner=runner.right;
            }
        }
        return false;
    }

    min(){
        if(this.root==null){
            return null;
        }
        var runner=this.root;
        while(runner.left!=null){
            runner=runner.left;
        }
        return runner.val;
    }

    max(){
        if(this.root==null){
            return null;
        }
        var runner=this.root;
        while(runner.right!=null){
            runner=runner.right;
        }
        return runner.val;
    }

    isEmpty(){
        if(this.root==null){
            return true;
        }
        else{
            return false;
        }
    }

    size(current_node){
        if (current_node==null){
            return 0;
        }
        var leftside = this.size(current_node.left);
        var rightside = this.size(current_node.right);
        return 1 + leftside +rightside;
    }
}

binary=new BST();
binary.add(3);
binary.add(1);
binary.add(4);
binary.add(7);
binary.add(2);
binary.add(13);
binary.add(-2);
binary.add(12);
binary.add(-1);
console.log(binary);
console.log(binary.contains(2));
console.log(binary.contains(10));
console.log(binary.contains(7));
console.log(binary.min());
console.log(binary.max());
console.log(binary.isEmpty());
console.log(binary.size(binary.root));