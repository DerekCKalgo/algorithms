function selections(a){
    var i;
    var j;
    var index;
    var temp;
    for(i=0; i<a.length-1; i++){
        var min=a[i];
        var count=0;
        for(j=i; j<a.length; j++){
            if(a[j]<min){
                min=a[j];
                index=j;
                count++;
            }
        }
        if(count>0){
            temp=a[index];
            a[index]=a[i];            
            a[i]=temp;
        }
    }
    return a;
}

b=selections([7, 6, 5, 9, 8, 3, 2, 1, 14, 88, 0, -2, 1000, 4])
console.log(b)