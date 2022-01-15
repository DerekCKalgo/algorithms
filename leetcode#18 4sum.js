function j(a, b){
    var i;
    var j;
    var k;
    var o;
    var l=0;
    var m;
    var n=0;
    var arr=[];
    for(i=0; i<a.length-3; i++){
        for(j=i+1; j<a.length-2; j++){
            for(k=j+1; k<a.length-1; k++)
                for(o=k+1; o<a.length; o++){
                    if((a[i]+a[j]+a[k]+a[o])==b){
                        if(arr.length==0){
                            arr[n]=[];
                            arr[n].push(a[i], a[j], a[k], a[o]);
                            n++;
                    }
                    else{
                    for(m=0; m<arr.length; m++){
                        if(a[i]==arr[m][0]&&a[j]==arr[m][1]&&a[k]==arr[m][2]&&a[o]==arr[m][3]){
                            break;
                        }
                        else if(a[i]==arr[m][0]&&a[j]==arr[m][1]&&a[k]==arr[m][3]&&a[o]==arr[m][2]){
                            break;
                        }
                        else if(a[i]==arr[m][0]&&a[j]==arr[m][2]&&a[k]==arr[m][1]&&a[o]==arr[m][3]){
                            break;
                        }
                        else if(a[i]==arr[m][0]&&a[j]==arr[m][3]&&a[k]==arr[m][1]&&a[o]==arr[m][2]){
                            break;
                        }
                        else if(a[i]==arr[m][0]&&a[j]==arr[m][3]&&a[k]==arr[m][2]&&a[o]==arr[m][1]){
                            break;
                        }
                        else if(a[i]==arr[m][0]&&a[j]==arr[m][2]&&a[k]==arr[m][3]&&a[o]==arr[m][1]){
                            break;
                        }
                        else if(a[i]==arr[m][1]&&a[j]==arr[m][0]&&a[k]==arr[m][2]&&a[o]==arr[m][3]){
                            break;
                        }
                        else if(a[i]==arr[m][1]&&a[j]==arr[m][0]&&a[k]==arr[m][3]&&a[o]==arr[m][2]){
                            break;
                        }
                        else if(a[i]==arr[m][2]&&a[j]==arr[m][0]&&a[k]==arr[m][1]&&a[o]==arr[m][3]){
                            break;
                        }
                        else if(a[i]==arr[m][3]&&a[j]==arr[m][0]&&a[k]==arr[m][1]&&a[o]==arr[m][2]){
                            break;
                        }
                        else if(a[i]==arr[m][3]&&a[j]==arr[m][0]&&a[k]==arr[m][2]&&a[o]==arr[m][1]){
                            break;
                        }
                        else if(a[i]==arr[m][2]&&a[j]==arr[m][0]&&a[k]==arr[m][3]&&a[o]==arr[m][1]){
                            break;
                        }
                        else if(a[i]==arr[m][2]&&a[j]==arr[m][1]&&a[k]==arr[m][0]&&a[o]==arr[m][3]){
                            break;
                        }
                        else if(a[i]==arr[m][3]&&a[j]==arr[m][1]&&a[k]==arr[m][0]&&a[o]==arr[m][2]){
                            break;
                        }
                        else if(a[i]==arr[m][1]&&a[j]==arr[m][2]&&a[k]==arr[m][0]&&a[o]==arr[m][3]){
                            break;
                        }
                        else if(a[i]==arr[m][1]&&a[j]==arr[m][3]&&a[k]==arr[m][0]&&a[o]==arr[m][2]){
                            break;
                        }
                        else if(a[i]==arr[m][2]&&a[j]==arr[m][3]&&a[k]==arr[m][0]&&a[o]==arr[m][1]){
                            break;
                        }
                        else if(a[i]==arr[m][3]&&a[j]==arr[m][2]&&a[k]==arr[m][0]&&a[o]==arr[m][1]){
                            break;
                        }
                        else if(a[i]==arr[m][1]&&a[j]==arr[m][2]&&a[k]==arr[m][3]&&a[o]==arr[m][0]){
                            break;
                        }
                        else if(a[i]==arr[m][1]&&a[j]==arr[m][3]&&a[k]==arr[m][2]&&a[o]==arr[m][0]){
                            break;
                        }
                        else if(a[i]==arr[m][3]&&a[j]==arr[m][1]&&a[k]==arr[m][2]&&a[o]==arr[m][0]){
                            break;
                        }
                        else if(a[i]==arr[m][2]&&a[j]==arr[m][1]&&a[k]==arr[m][3]&&a[o]==arr[m][0]){
                            break;
                        }
                        else if(a[i]==arr[m][2]&&a[j]==arr[m][3]&&a[k]==arr[m][1]&&a[o]==arr[m][0]){
                            break;
                        }
                        else if(a[i]==arr[m][3]&&a[j]==arr[m][2]&&a[k]==arr[m][1]&&a[o]==arr[m][0]){
                            break;
                        }
                        else if(m==arr.length-1){
                            arr[n]=[];
                            arr[n].push(a[i], a[j], a[k], a[o]);
                            n++;
                        }
                        }
                    }
                    }
                }
            }
        }
    return arr;
}

b=j([-1, 0, 1, 2, -1, -4, 4, 4], -1)
console.log(b)