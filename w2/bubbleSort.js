const bubbleSort = (arr) => {
    let n = arr.length;

    for(let i=0; i<n; i++) {
        for(let j=0; j<n; j++) {
            if(arr[j]>arr[j+1]) {
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
            }
        }
    }

    return arr;
}

console.log(bubbleSort([5,4,3,2,1]));