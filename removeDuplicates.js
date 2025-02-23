function removeDuplicates(n, nums) {
    let arr=[2, 2, 2, 3, 4, 4, 9];


    function removeDuplicatesFromSortedArrayII(arr,n){
       
       let i=0;
       let j=0;
       
       let cnt=0;
       while(i<n){
           if(i>0&& arr[i]!=arr[i-1]){
               cnt=0;
           }
           cnt++;
           if(cnt<=2){
               arr[j]=arr[i];
               j++;
           }
           i++
       }
       
       return arr;
       
    }
    
    
    let ans=removeDuplicatesFromSortedArrayII(arr,7);
    
    console.log(ans);
}


const n = 7;
const nums = [2, 2, 2, 3, 4, 4, 9];

let ans=removeDuplicates(n, nums);
console.log(ans)
