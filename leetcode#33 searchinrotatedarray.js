function search(a, beg, end, b){
    if(end>=beg){
    let mid=Math.floor((end+beg)/2);
    if(b==a[mid]){
        return mid;
    }
    if(b<a[mid]){
        return search(a, beg, mid-1, b);
    }
    else if(b>a[mid]){
        return search(a, mid+1, end, b);
    }
}
else{
    return -1;
}
    };

a=[2, 4, 5, 7, 8, 11, 15, 22, 33, 55, 100, 102, 222, 333, 338, 429, 478, 520, 549, 639, 660, 735, 899, 992, 1001, 1110]
n=a.length-1
b=search([2, 4, 5, 7, 8, 11, 15, 22, 33, 55, 100, 102, 222, 333, 338, 429, 478, 520, 549, 639, 660, 735, 899, 992, 1001, 1110], 0, n, 478)
console.log(b)