let arr = new Array()
arr = [-2,1,1]
for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
             for (let k = j+1; k < arr.length; k++) {
            if(arr[i]+arr[j]+arr[k] == 0){
                console.log("Array is : ("+arr[i]+","+arr[j]+","+arr[k]+")");
            }
        }
    }
}