const selectionSort = (arr) => {
    const n = arr.length;
    for(let i=0; i<n-1; i++) {
        let minInd = i;
        for(let j=i+1; j<n; j++) {
            if(arr[j]<arr[minInd]){
                minInd = j;
            }
        }
        
        if(minInd !== i) {
            [arr[i],arr[minInd]] = [arr[minInd],arr[i]];
        }
    }

    return arr;
}

console.log(selectionSort([5,4,3,2,1]));