//suffix sum and prefix sum of an array
//prefix sum is the sum of all elements from 0 to i

//suffix sum is the sum of all elements from i to n-1
//Example   
// arr=[1,2,4,5,6,7,8]
// prefix sum=[1,3,7,12,18,25]  
// suffix sum=[33,32,30,25,19,12]
//Time complexity of prefix sum and suffix sum is O(n)
//Space complexity is O(n)
//where n is the number of elements in the array



function prefixSum(arr){
    let prefixSum=[];
    prefixSum[0]=arr[0];
    
    for(let i=1;i<arr.length;i++){
        prefixSum[i]=prefixSum[i-1]+arr[i];
    }
    return prefixSum;
}

function suffixSum(arr){
    let suffixSum=[];
    let n=arr.length;
    suffixSum[n-1]=arr[n-1];
    
    for(let i=n-2;i>=0;i--){
        suffixSum[i]=suffixSum[i+1]+arr[i]
    }
    return suffixSum;
}

// Example usage
let arr = [1, 2, 4, 5, 6, 7, 8];
console.log(prefixSum(arr));
console.log(suffixSum(arr));