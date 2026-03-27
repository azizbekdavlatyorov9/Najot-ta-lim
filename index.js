//1-masala
// function longestPalindromicSubstring(s) {
// let start = 0
// let maxLen = 1;

//   function expand(l, r) {
//     while (l >= 0 && r < s.length && s[l] === s[r]) {
//       if (r - l + 1 > maxLen) {
//         maxLen = r - l + 1;
//         start = l;
//       }
//       l--;
//       r++;
//     }
//   }

//   for (let i = 0; i < s.length; i++) {
//     expand(i, i);     
//     expand(i, i + 1); 
//   }

//   return s.substring(start, start + maxLen);
// }
// console.log(longestPalindromicSubstring("cbbd"));


// 2-masala
// function rotateArray(arr, k) {
//   let num = arr.slice(k)
//   let son = arr.slice(0, k)  
//   return [...num, ...son] 
// }
// console.log(rotateArray([1, 2, 3, 4, 5], 3));


// 3-masala
// function twoSum(arr, target) {
//   for(let i = 0; i < arr.length; i++ ){
//     for(let j = i + 1; j < arr.length; j++){
//      if( arr[i] + arr[j] === target){
//       return [i , j]
//      }
//     }
//   }    
// }
// console.log(twoSum([2, 4, 8, 9, 5], 6));


//4-masala
// function hasSum(arr, target) {
//   let yigindi = 0
//   for(let num of arr){
//     yigindi += num
//   }  
//   return yigindi === target
// }
// console.log(hasSum([2, 5, 4], 11));


//5-masala
// function arrayDifference(arr1, arr2) {
//   let result = []
//   for(let son of arr1){
//     if(arr2.indexOf(son)=== -1){
//       result.push(son)
//     }
//   }
//   for(let son1 of arr2){
//     if(arr1.indexOf(son1) === -1){
//       result.push(son1)
//     }
//   }
//   return result
// }
// console.log(arrayDifference([1, 5, 6, 8], [5, 6, 9, 8, 7, 7]));


// //6-masala
// function mostFrequentElement(arr) {
//   let result = arr[0]
//   let count = {}
//   let maxCount = 0
//   for (let son of arr){
//     count[son] = (count[son] || 0) + 1 

//     if(count[son] > maxCount){
//       maxCount = count[son]
//       result = son
//     }
//   }
//     return result
// }
// console.log(mostFrequentElement([1, 2, 1, 3, 5, 6 , 6, 8, 6]));

//7-masala
// function incrementDigits(str) {
//   let result = str.replace(/\d/g, (str) => Number(str) +1 )
//   return result 
// }
// console.log(incrementDigits("a1d5d6h7y"));

// 8-masala
// function longestIncreasingSubarray(arr) {
//   let maxlength = 1
//   let currentlength = 1
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] > arr[i-1]){
//       currentlength ++ 
//     }else{
//       currentlength = 1
//     }
//     if(currentlength > maxlength){
//       maxlength = currentlength
//     }
//   }
//   return maxlength
// }
// console.log(longestIncreasingSubarray([10, 20, 30, 10, 40, 50, 52, 55, 6]));

//9-masala
// function countOccurrences(arr) {
//   let result = {}
//   for(let son of arr){ 
//     if(result[son]){
//       result[son] += 1
//     }else{
//       result[son] = 1
//     }
//   }
//   return result
// }
// console.log(countOccurrences([1, 5, 9, 7, 6, 8, 8, 3]));

//10-masala
// function matrixSum(matrix) {
//   let result = 0
//   for(let qator of matrix ){
//     for(let son of qator){
//       result += son
//     }
//   }    
//   return result
// }
// console.log(matrixSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));