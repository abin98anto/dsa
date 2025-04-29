const insertionSort = (arr) => {
    let n = arr.length;

    for(let i=1; i<n; i++) {
        let cur = arr[i];
        let j = i-1;

        while(j>=0 && arr[j]>cur) {
            arr[j+1] = arr[j];
            j--;
        }

        arr[j+1] = cur;
    }

    return arr;
}

console.log(insertionSort([5,4,3,2,1]));