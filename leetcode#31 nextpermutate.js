function nextpermutate(a){
    let i;
    let j;
    let k;
    let l;
    let m;
    let min_index;
    let tem;
    let temp;
    let newperm=[];
    let that;
    let ind;
    let pos;
    for(i=a.length-1; i>0; i--){
        if(a[i-1]>a[i]){
        if(i==1){
            for(j=a.length-1; j>=0; j--){
                newperm.push(a[j]);
            }
            return newperm;
            }
        continue;
        }
        else if(a[i-1]<a[i]){
            console.log(i);
                temp=Math.abs(a[i-1]-a[i]);
                console.log(temp);
                for(k=i; k<a.length; k++){
                    if((Math.abs(a[k]-a[i-1]))<temp){
                        temp=Math.abs(a[k]-a[i-1]);
                        ind=k;
                    }
                    console.log(ind);
                }
                pos=a[i-1];
                a[i-1]=a[ind];
                a[ind]=pos;
            }
        if(i<a.length-1){
        for(l=i; l<a.length-1; l++){
            min_index=l;
            for(m=l+1; m<a.length; m++){
                if(a[m]<a[min_index]){
                    min_index=m;
                }
            }
            tem=a[l];
            a[l]=a[min_index];
            a[min_index]=tem;
        }
        }
        return a;
    }
    }; 

b=nextpermutate([2, 4, 5, 7, 8, 20, 18, 15, 14, 13, 11])
console.log(b)