function j(a){
    var i;
    var j=0;
    for(i=0; i<a.length; i++){
        if(a[i]=="("&&a[i+1]!=")"){
            return false;
        }
        else if(a[i]=="{"&&a[i+1]!="}"){
            return false;
        }
        else if(a[i]=="["&&a[i+1]!="]"){
            return false;
        }
        else if(a[i]==")"){
            return false;
        }
        else if(a[i]=="}"){
            return false;
        }
        else if(a[i]=="]"){
            return false;
        }
        else if(a[i]=="("&&a[i+1]==")"){
            i++;
            j++;
            continue;
        }
        else if(a[i]=="{"&&a[i+1]=="}"){
            i++;
            j++;
            continue;
        }
        else if(a[i]=="["&&a[i+1]=="]"){
            i++;
            j++;
            continue;
        }
    }
    if(j!=0){
        return true;
    }
}

b=j("(){}[][](){}[][](){}[][](){}[][](){}[][](){}[][](){}[][](){}[][](){}[][](){}[][](){}[][](){}[][](){}[][](){}[][]")
console.log(b)