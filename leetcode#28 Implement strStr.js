function haystackneedle(a, b){
    let i;
    let j;
    let match=0;
    let index;
    for(i=0; i<a.length; i++){
        for(j=0; j<b.length; j++){
            if(b[j]!=a[i+j]){
                match=0;
                break;
            }
            else if(b[j]==a[i+j]){
                if(j==0){
                    index=i;
                }
                match++;
                if(match==b.length){
                    return index;
                }
                else if(match!=b.length){
                    continue;
                }
            }
        }
    }
    return -1;
};

b=haystackneedle("hellomaster", "ste")
console.log(b)