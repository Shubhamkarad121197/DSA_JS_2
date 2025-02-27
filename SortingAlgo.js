function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

const arr = [3, 5, 1, 2, 8, 7, 6, 4];
console.log(quickSort(arr)); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
// Compare this snippet from mergeSort.js:
// function mergeSort(arr) {
//     if (arr.length <= 1) {               

//         return arr;                                                          

//     }
//     const mid = Math.floor(arr.length / 2);
//     const left = arr.slice(0, mid);
//     const right = arr.slice(mid);                                                    
//     return merge(mergeSort(left), mergeSort(right));
// }    

// function merge(left, right) {
//     let result = [];

//     while (left.length && right.length) {
//         if (left[0] < right[0]) {
//             result.push(left.shift());
//         } else {
//             result.push(right.shift());
//         }                        
//     }

//     return result.concat(left, right);   
// }

// const arr = [3, 5, 1, 2, 8, 7, 6, 4];
// console.log(mergeSort(arr)); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
// Compare this snippet from bubbleSort.js:
// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//             }    
//         }

//     }


//     return arr;
// }

// const arr = [3, 5, 1, 2, 8, 7, 6, 4];
// console.log(bubbleSort(arr)); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

// Compare this snippet from insertionSort.js:
// function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         let key = arr[i];
//         let j = i - 1;
//         while (j >= 0 && arr[j] > key) {
//             arr[j + 1] = arr[j];
//             j = j - 1;
//         }
//         arr[j + 1] = key;
//     }
//     return arr;
// }


// const arr = [3, 5, 1, 2, 8, 7, 6, 4];
// console.log(insertionSort(arr)); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
// Compare this snippet from selectionSort.js:
// function selectionSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let minIndex = i;
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[minIndex]) {
//                 minIndex = j;
//             }
//         }
//         [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
//     }
//     return arr;
// }

// const arr = [3, 5, 1, 2, 8, 7, 6, 4];
// console.log(selectionSort(arr)); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
// Compare this snippet from countingSort.js:
// function countingSort(arr) {
//     let max = Math.max(...arr);  
//     let min = Math.min(...arr);
//     let count = Array(max - min + 1).fill(0);
//     let output = Array(arr.length).fill(0);
//     for (let i = 0; i < arr.length; i++) {
//         count[arr[i] - min]++;
//     }
//     for (let i = 1; i < count.length; i++) { 
//         count[i] += count[i - 1];
//     }
//     for (let i = arr.length - 1; i >= 0; i--) {
//         output[count[arr[i] - min] - 1] = arr[i];
//         count[arr[i] - min]--;
//     }
//     return output;
// }

// const arr = [3, 5, 1, 2, 8, 7, 6, 4];
// console.log(countingSort(arr)); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

// Compare this snippet from radixSort.js:
// function countingSort(arr, exp) {
//     let output = Array(arr.length).fill(0);
//     let count = Array(10).fill(0);
//     for (let i = 0; i < arr.length; i++) {
//         count[Math.floor(arr[i] / exp) % 10]++;
//     }
//     for (let i = 1; i < 10; i++) {
//         count[i] += count[i - 1];
//     }
//     for (let i = arr.length - 1; i >= 0; i--) {
//         output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
//         count[Math.floor(arr[i] / exp) % 10]--;
//     }
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = output[i];
//     }
//     return arr;      
// }

// function radixSort(arr) {
//     let max = Math.max(...arr);
//     for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
//         arr = countingSort(arr, exp);
//     }
//     return arr;  
// }

// const arr = [170, 45, 75, 90, 802, 24, 2, 66];
// console.log(radixSort(arr)); // Output: [2, 24, 45, 66, 75, 90, 170, 802]
// Compare this snippet from heapSort.js:
// function heapSort(arr) {
//     let n = arr.length;
//     for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
//         heapify(arr, n, i);
//     }
//     for (let i = n - 1; i > 0; i--) {
//         [arr[0], arr[i]] = [arr[i], arr[0]];
//         heapify(arr, i, 0);
//     }
//     return arr;

// }

// function heapify(arr, n, i) {
//     let largest = i;
//     let left = 2 * i + 1;
//     let right = 2 * i + 2;
//     if (left < n && arr[left] > arr[largest]) {
//         largest = left;


//     }
//     if (right < n && arr[right] > arr[largest]) {

//         largest = right;
//     }
//     if (largest !== i) {
//         [arr[i], arr[largest]] = [arr[largest], arr[i]];
//         heapify(arr, n, largest);
//     }
// }

// const arr = [3, 5, 1, 2, 8, 7, 6, 4];
// console.log(heapSort(arr)); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

// Compare this snippet from shellSort.js:
// function shellSort(arr) {
//     let n = arr.length;
//     for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
//         for (let i = gap; i < n; i++) {
//             let temp = arr[i];
//             let j;
//             for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
//                 arr[j] = arr[j - gap];
//             }
//             arr[j] = temp;
//         }
//     }
//     return arr;
// }

// const arr = [3, 5, 1, 2, 8, 7, 6, 4];
// console.log(shellSort(arr)); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
